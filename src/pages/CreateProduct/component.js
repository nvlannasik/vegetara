import React from "react";
import PagePetani from "../../components/layouts/PagePetani";
import {
  ButtonFilled,
  TextInput,
  DragAndDrop,
} from "../../components/elements";
import { Formik } from "formik";
import * as Yup from "yup";
import { DatePicker } from "antd";
import { API, ROUTES } from "../../configs";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import moment from "moment";

export default class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameProduct: "",
      priceProduct: "",
      stockProduct: "",
      descriptionsProduct: "",
      imageProduct: "",
      harvestProduct: "",
      petaniName: localStorage.getItem("name"),
      id: localStorage.getItem("id"),
      token: localStorage.getItem("accessToken"),
    };
  }

  
  _renderForm = ({ values, errors, touched, handleChange: _handleChange, handleBlur: _handleBlur, handleSubmit: _handleSubmit, isSubmitting }) => {
    const _handleFilesFromDrag = (name, file) => {
      console.log(name, URL.createObjectURL(file));
      this.setState({ [name]: URL.createObjectURL(file) }, () => {
        _handleChange({ target: { name, value: URL.createObjectURL(file) } });
      });
    };

    const _handleChangeDate = (date, dateString) => {
      this.setState({ harvestProduct: moment(dateString).format("YYYY/MM/DD") }, () => {
        _handleChange({ target: { name: date, value: dateString } });
      });
    }

    return (
      <div>
        <Link to={ROUTES.DASBOARD_PETANI()}>
          <ArrowBackIcon />
        </Link>
        <form onSubmit={_handleSubmit}>
        <TextInput
          name="namePetani"
          label="Nama Pemilik"
          type="text"
          disabled
            value={values.petaniName}
            hinterror={touched.petaniName && errors.petaniName}
        />
        <TextInput
          name="nameProduct"
          label="Nama Sayur"
          placeholder="Masukkan nama sayur"
          type="text"
          value={values.nameProduct}
            onChange={_handleChange}
            hinterror={touched.nameProduct && errors.nameProduct}
        />
        <TextInput
          name="priceProduct"
          label="Harga"
          placeholder="Masukkan harga sayur"
          type="number"
          value={values.priceProduct}
            onChange={_handleChange}
            hinterror={touched.priceProduct && errors.priceProduct}
        />
        <TextInput
          name="stockProduct"
          label="Stok"
          placeholder="Masukkan stok sayur"
          type="number"
          value={values.stockProduct}
          onChange={_handleChange}
          hinterror={errors.stockProduct && touched.stockProduct}
            
        />
        <DragAndDrop
            value={values.imageProduct}
            onChange={_handleFilesFromDrag.bind(this, "imageProduct")}
            hint="Unggah foto sayur"
            onBlur={_handleBlur}
            hintError={errors.imageProduct && touched.imageProduct}
            acceptFiles='.png,.jpg,.jpeg'
            text={"sdfds"}
            name="file"
          />
        <DatePicker
            value={values.harvestProduct}
            onChange={_handleChangeDate.bind(this, "harvestProduct")}
        />
        <TextInput
          name="descriptionProduct"
          label="Deskripsi"
          placeholder="Masukkan deskripsi sayur"
          type="text"
          value={values.descriptionProduct}
          onChange={_handleChange}
          hinterror={errors.descriptionProduct && touched.descriptionProduct}
        />
          <ButtonFilled type="submit">tambah</ButtonFilled>
        </form>
      </div>
    );
  };

  _handleSubmit = (values) => {
    const { nameProduct, priceProduct, stockProduct, descriptionProduct, imageProduct, harvestProduct,  petaniName } = values;
    const { id, token } = this.state;
    const data = {
      "name": nameProduct,
      "description": descriptionProduct,
      "price": priceProduct,
      "imageUrl": imageProduct,
      "harvestDate": moment(harvestProduct).format("YYYY/MM/DD"),
      "expirationDate": moment(harvestProduct).format("YYYY/MM/DD"),
      "petaniId": id,
      "petaniName": petaniName,
      "stock": stockProduct,
    }
    const headers = {
      "x-auth-token-petani": token,
      'Content-Type': 'multipart/form-data'
    }

    axios.post(API.getAllProduct, data, { headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    
  };
  
  _handleSchema = () => {
    return Yup.object().shape({
      nameProduct: Yup.string().required("Nama sayur harus diisi")
      .min(5, "Nama sayur minimal 5 karakter"),
      priceProduct: Yup.number().required("Harga harus diisi"),
      stockProduct: Yup.number().required("Stok harus diisi"),
      descriptionProduct: Yup.string().required("Deskripsi harus diisi"),
      imageProduct: Yup.string().required("Foto harus diisi"),
      harvestProduct: Yup.string().required("Tanggal panen harus diisi"),
    });
  };

  render() {
    const { classes } = this.props;
    const {  nameProduct, priceProduct, stockProduct, descriptionProduct, imageProduct, harvestProduct, petaniId, petaniName } = this.state;
    return (
      <PagePetani>
        <div className={classes.container}>
          <Formik
            initialValues={{  nameProduct, priceProduct, stockProduct, descriptionProduct, imageProduct, harvestProduct, petaniId, petaniName }}
            component={this._renderForm}
            onSubmit={this._handleSubmit}
            validationSchema={this._handleSchema}
          />
        </div>
      </PagePetani>
    );
  }
}
