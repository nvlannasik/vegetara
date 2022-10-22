import * as Yup from 'yup';
import { REGEX } from '../configs';

export const loginSchema = Yup.object().shape({
  username: Yup.string().required('Username tidak boleh kosong'),
  password: Yup.string().required('Password tidak boleh kosong'),
});

export const registerSchema = Yup.object().shape({
  username: Yup.string().required('Username tidak boleh kosong')
    .min(6, 'Username minimal 6 karakter')
    .max(20, 'Username maksimal 20 karakter')
    .matches(REGEX.username, 'Username hanya boleh huruf kecil, angka, dan tanpa spasi'),
  password: Yup.string().required('Password tidak boleh kosong')
    .min(8, 'Password minimal 8 karakter')
    .matches(REGEX.password, 'Password hanya boleh mengandung huruf dan angka'),
  email: Yup.string().email('Email tidak valid').required('Email tidak boleh kosong')
    .matches(REGEX.email, 'Email tidak valid'),
  name: Yup.string().required('Nama tidak boleh kosong')
  .min(6, 'Nama minimal 6 karakter'),
  phone: Yup.string().required('Nomor telepon tidak boleh kosong')
    .matches(REGEX.phone, 'Nomor telepon harus diawali dengan 08 dan hanya boleh mengandung angka'),
});
