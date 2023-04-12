import React, { FormEvent, useEffect, useState } from 'react';

import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material';
import {
  Box, Button, Grid, IconButton,
  Paper, TextField, Typography,
} from '@mui/material';
import {
  TProduct, apagar, editar, salvar, selectAllProducts, salvarLocalStorage,
} from '../../store/modules/products/productsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export function Products() {
  const products = useAppSelector(selectAllProducts);

  const [isEditing, setIsEditing] = useState(false);
  const [product, setProduct] = useState({} as TProduct);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProducts = JSON.parse(localStorage.getItem('retorno') || '[]');
    if (getProducts?.length === 0) {
      return;
    }

    console.log(getProducts);
  }, []);

  const resetProduct = () => {
    setProduct({
      title: '',
      price: 0,
    } as TProduct);
  };

  const onSaveProduct = (e: FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(editar({ id: product.id, changes: { price: product.price, title: product.title } }));
      setIsEditing(false);
    } else {
      dispatch(salvarLocalStorage({ id: Date.now(), title: product.title, price: product.price }));
    }

    resetProduct();
  };

  const handleEdit = (p: TProduct) => {
    setIsEditing(true);
    setProduct(p);
  };

  function handleDelete(id: number) {
    dispatch(apagar(id));
    // delete
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    // update values
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    resetProduct();
  };

  return (
    <Grid container px={1}>
      <Grid item xs={12}>
        <Typography variant="h2" color="primary" align="center">Products</Typography>
      </Grid>

      <Grid item xs={12}>
        <Paper
          sx={{
            width: '50%',
            margin: '1rem auto',
            padding: '1rem',
            paddingTop: '2rem',
            backgroundColor: 'background.paper1',
          }}
        >

          <Box component="form" display="flex" flexDirection="column" gap={2}>
            <TextField
              variant="outlined"
              label="Name"
              type="text"
              name="title"
              value={product.title || ''}
              onChange={handleChange}
            />

            <TextField
              variant="outlined"
              label="Price"
              name="price"
              type="number"
              value={product.price || ''}
              onChange={handleChange}
            />

            <Box
              sx={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'space-around',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="button"
                onClick={onSaveProduct}
                disabled={!product.title || !product.price}
                sx={{
                  width: '30%',
                  alignSelf: 'center',
                  borderRadius: '24px',

                  '&:disabled': {
                    backgroundColor: 'background.btnDisabled',
                  },
                }}
              >
                {isEditing ? 'Update' : 'Save'}
              </Button>
              {isEditing && (
              <Button
                variant="contained"
                color="error"
                type="button"
                onClick={handleCancelEdit}
                disabled={!product.title || !product.price}
                sx={{
                  width: '30%',
                  alignSelf: 'center',
                  borderRadius: '24px',
                }}
              >
                Cancel
              </Button>
              )}
            </Box>
          </Box>

        </Paper>

        <Grid item container xs={12} spacing={2}>
          { products?.map((p) => (
            <Grid item key={p.id} xs={12} sm={6} md={4}>
              <Paper
                elevation={6}
                sx={{
                  padding: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',

                  backgroundColor: (isEditing && p.id === product.id) ? 'background.editing' : null,
                }}
              >
                <Box>
                  <Typography variant="body2" color="secondary">
                    <Typography variant="body1" color="primary" component="span">Titulo: </Typography>
                    {p.title}
                  </Typography>

                  <Typography variant="body2" color="secondary">
                    <Typography variant="body1" color="primary" component="span">Valor: </Typography>
                    {p.price}
                  </Typography>
                </Box>
                <Box>
                  <IconButton onClick={() => handleEdit(p)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(p.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
