import React from 'react';
import PageAdmin from "../../components/layouts/PageAdmin";
import { ButtonFilled, TextInput, } from '../../components/elements';
import { Formik } from 'formik';


export default class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProduct: '',
      priceProduct: '',
      stockProduct: '',
      descriptionsProduct:''
    }
  }
  render() {
    return (
      <PageAdmin>
      <div>
          <TextInput
            name="nameProduct"
            label="Nama Sayur"
            placeholder="Masukkan nama sayur"
            type="text"
          />
          <TextInput
            name="priceProduct"
            label="Harga" 
            placeholder="Masukkan harga sayur"
            type="number"
          />
          <TextInput
            name="stockProduct"
            label="Stok"
            placeholder="Masukkan stok sayur"
            type="number"
          />
          <TextInput
            name="descriptionProduct"
            label="Deskripsi"
            placeholder="Masukkan deskripsi sayur"
            type="text"
          />
          <ButtonFilled>tambah</ButtonFilled>
      </div>
      </PageAdmin>
    );
  }
}