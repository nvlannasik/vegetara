import React from "react";
import PagePetani from "../../components/layouts/PagePetani";
import {
  ButtonFilled,
  TextInput,
  DragAndDrop,
  ModalExpired
} from "../../components/elements";
import { Formik } from "formik";
import * as Yup from "yup";
import { DatePicker, Modal } from "antd";
import { API, ROUTES } from "../../configs";
import axios from "axios";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import moment from "moment";
import { Select } from "antd";


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
      satuan: "",
      imgProduct: "",
      address: "",
      priview:false
    };
  }

  renderPreview = () => {
    const { priview, imgProduct } = this.state;
    return (
      <Modal
        title="Priview Foto"
        visible={priview}
        onOk={this.handleOpenCloseModal}
        onCancel={this.handleOpenCloseModal}
      >
       <img src={imgProduct} alt="priview" style={{width:"100%"}}/>
      </Modal>
    )
  }

  renderModal = () => {
    const { modalExpired } = this.state;
    return (
      <ModalExpired
        visible={modalExpired}
        onOk={this.handleOpenCloseModal}
        onCancel={this.handleOpenCloseModal}
      />
    );
  };

  handleOpenCloseModal = () => {
    this.setState({ priview: !this.state.priview })
  }

  _renderForm = ({
    values,
    errors,
    touched,
    handleChange: _handleChange,
    handleBlur: _handleBlur,
    handleSubmit: _handleSubmit,
    isSubmitting,
  }) => {
    const _handleFilesFromDrag = (name, file) => {
      this.setState({ imgProduct: URL.createObjectURL(file) }, () => {
        _handleChange({ target: { name, value: file } });
      });
    };

    const _handleChangeDate = (date, dateString) => {
      this.setState(
        { harvestProduct: moment(dateString).format("YYYY/MM/DD") },
        () => {
          _handleChange({ target: { name: date, value: dateString } });
        }
      );
    };
    const options = [
      { label: "Kg", value: "Kg" },
      { label: "Gr", value: "Gr" },
      { label: "Pcs", value: "Pcs" },
      { label: "Ml", value: "Ml" },
    ];
    const handleChangeSatuan = (value) => {
      _handleChange({ target: { name: "satuan", value: value } });
    };
  
    const { classes } = this.props;
    const { imgProduct } = this.state;
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
            type="text"
            value={values.nameProduct}
            onChange={_handleChange}
            hinterror={touched.nameProduct && errors.nameProduct}
          />
          <TextInput
            name="priceProduct"
            label="Harga"
            type="text"
            value={values.priceProduct}
            onChange={_handleChange}
            hinterror={touched.priceProduct && errors.priceProduct}
          />
          <div className={classes.kilo}>
            <div className="kilogram">
              <TextInput
                name="stockProduct"
                label="Stok"
                type="number"
                value={values.stockProduct}
                onChange={_handleChange}
                hinterror={errors.stockProduct && touched.stockProduct}
              />
            </div>
            <div className="satuan">
            <p>satuan</p>
            <Select
              name="satuan"
              label="Satuan"
              type="text"
              value={values.satuan}
              onChange={handleChangeSatuan}
              options={options}
              />
              {errors.satuan && touched.satuan && (
                <p className={classes.error}>{errors.satuan}</p>
              )}
            </div>
          </div>
          <div className={classes.date}>
            <p>Tanggal Panen</p>
            <DatePicker
              value={values.harvestProduct}
              onChange={_handleChangeDate.bind(this, "harvestProduct")}
              placeholder="pilih tanggal"
            />
          </div>
          <TextInput
            name="address"
            label="Alamat "
            type="text"
            value={values.address}
            onChange={_handleChange}
            hinterror={touched.address && errors.address}
          />
          <TextInput
            name="descriptionProduct"
            label="Deskripsi Produk"
            type="text"
            value={values.descriptionProduct}
            onChange={_handleChange}
            hinterror={errors.descriptionProduct && touched.descriptionProduct}
          />
          <div className={classes.DragAndDrop}>
            <div className="drag">
          <DragAndDrop
            value={values.imageProduct}
            onChange={_handleFilesFromDrag.bind(this, "imageProduct")}
            hint="Unggah foto sayur"
            onBlur={_handleBlur}
            hintError={errors.imageProduct && touched.imageProduct}
              />
            </div>
          {
            imgProduct ? (
                <div className="image">
                  <ButtonFilled classes={{ buttonFilled: classes.buttonFilled }} onClick={() => this.handleOpenCloseModal()}>Lihat Foto</ButtonFilled>
              </div>
            ) :
              ""}
            
          </div>
          <ButtonFilled type="submit" isSubmitting>Tambah</ButtonFilled>
        </form>
      </div>
    );
  };

  _handleSubmit = (values) => {
    const {
      nameProduct,
      priceProduct,
      stockProduct,
      descriptionProduct,
      imageProduct,
      harvestProduct,
      petaniName,
      address,
      satuan,
    } = values;
    const { id, token } = this.state;

    const data = {
      name: nameProduct,
      description: descriptionProduct,
      price: priceProduct,
      imageUrl: imageProduct,
      harvestDate: moment(harvestProduct).format("YYYY/MM/DD"),
      expirationDate: moment(harvestProduct).format("YYYY/MM/DD"),
      petaniId: id,
      petaniName: petaniName,
      stock: stockProduct,
      alamatPetani: address,
      satuanJenis: satuan,
    };
    const headers = {
      "x-auth-token-petani": token,
      "Content-Type": "multipart/form-data",
    };

    axios
      .post(API.getAllProduct, data, { headers })
      
  };

  _handleSchema = () => {
    return Yup.object().shape({
      nameProduct: Yup.string()
        .required("Nama sayur harus diisi")
        .min(5, "Nama sayur minimal 5 karakter"),
      priceProduct: Yup.number().required("Harga harus diisi"),
      stockProduct: Yup.number().required("Stok harus diisi"),
      descriptionProduct: Yup.string().required("Deskripsi harus diisi"),
      imageProduct: Yup.string().required("Foto harus diisi"),
      harvestProduct: Yup.string().required("Tanggal panen harus diisi"),
      address: Yup.string().required("alamat harus diisi"),
      satuan: Yup.string().required("satuan harus diisi"),
    });
  };

  render() {
    const { classes } = this.props;
    const {
      nameProduct,
      priceProduct,
      stockProduct,
      descriptionProduct,
      imageProduct,
      harvestProduct,
      petaniId,
      petaniName,
      address,
      satuan,
    } = this.state;
    return (
      <PagePetani>
        <div className={classes.container}>
          <Formik
            initialValues={{
              nameProduct,
              priceProduct,
              stockProduct,
              descriptionProduct,
              imageProduct,
              harvestProduct,
              petaniId,
              petaniName,
              address,
              satuan,
            }}
            component={this._renderForm}
            onSubmit={this._handleSubmit}
            validationSchema={this._handleSchema}
          />
          {this.renderPreview()}
        </div>
      </PagePetani>
    );
  }
}
