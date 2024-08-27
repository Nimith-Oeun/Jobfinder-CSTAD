import React, { useEffect } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { HiCamera } from "react-icons/hi";
import profile from "../../assets/Profile.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUpdateUser,fetchGetUser ,fectupdateUser, selectGetUser } from "../../redux/feature/user/UserSlice";
import { getAccessToken } from "../../lib/securLocalStorage";

const validationSchema = Yup.object({
  first_name: Yup.string().required("First Name is Required!!"),
  last_name: Yup.string().required("Last Name is Required!!"),
  username: Yup.string().required("User Name is Required!!"),
  phone: Yup.string().required("Phone is Required"),
  address: Yup.string().required("Address is Required"),
  dob: Yup.string().required("Date of Birth is Required"),
  bio: Yup.string().required("Bio is Required"),
  linkin: Yup.string().required("LinkedIn is Required"),
  facebook: Yup.string().required("Facebook is Required"),
  twitter: Yup.string().required("Twitter is Required"),
  instagram: Yup.string().required("Instagram is Required"),
  gender: Yup.string().required("Gender is Required"),
  avatar: null,
});

export default function UpdateProfile({ isModalOpen, handleCloseModal }) {
  const [isProfile, setisProfile] = useState(profile);
  const dispatch = useDispatch();
  const userUpdateRespon = useSelector(selectUpdateUser);
  const userGetRespon = useSelector(selectGetUser);
  const email = userGetRespon.email;
  console.log("email", email);
  const token = getAccessToken();
  console.log("userUpdateRespon", userUpdateRespon);

  // convert image to base64 format (when use formik to upload image we must convert image to base64 format)
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <>
      <Modal show={isModalOpen} size="6xl" onClose={handleCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              username: "",
              phone: "",
              email:`${email}`,
              address: "",
              dob: "",
              bio: "",
              gender: "",
              linkin: "",
              facebook: "",
              twitter: "",
              instagram: "",
              avatar: null,
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              if (values.avatar) {
                values.avatar = await convertToBase64(values.avatar[0]);
              }
              dispatch(fectupdateUser(values));
              
              dispatch(fetchGetUser(token));
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, setFieldValue }) => {
              return (
                <Form className="p-5">
                  <div className="w-full ">
                    <div className="flex flex-col justify-center items-center p-5">
                      <img
                        src={profile ? isProfile : profile}
                        alt=""
                        className="w-[150px] rounded-[50%] object-contain border-2 border-[#00214A]"
                      />
                      <div className="bg-gray-100 w-16 rounded-md mt-3 shadow-md">
                        <label htmlFor="avatar" className="cursor-pointer">
                          <HiCamera className="w-[25px] h-auto m-auto" />
                        </label>
                        <input
                          type="file"
                          name="avatar"
                          id="avatar"
                          className="hidden"
                          onChange={(event) => {
                            setFieldValue("avatar", event.currentTarget.files);
                            setisProfile(
                              URL.createObjectURL(event.currentTarget.files[0])
                            );
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-2">
                      <Label htmlFor="first_name">First Name</Label>
                      <Field name="first_name" as={TextInput} id="first_name" />
                      <ErrorMessage
                        name="first_name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="last_name">Last Name</Label>
                      <Field name="last_name" as={TextInput} id="last_name" />
                      <ErrorMessage
                        name="last_name"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="username">User Name</Label>
                      <Field name="username" as={TextInput} id="username" />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="email">Email</Label>
                      <Field name="email" as={TextInput} id="email" disabled />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Field name="phone" as={TextInput} id="phone" />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-2 pt-6">
                      <Field
                        name="gender"
                        as="select"
                        id="gender"
                        className="w-full p-2 border border-blue-800 rounded-md"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Field>
                      <ErrorMessage
                        name="gender"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-3">
                      <Label htmlFor="address">Address</Label>
                      <Field name="address" as={TextInput} id="address" />
                      <ErrorMessage
                        name="address"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-3">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Field name="dob" as={TextInput} type="date" id="dob" />
                      <ErrorMessage
                        name="dob"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-3">
                      <Label htmlFor="bio">Bio</Label>
                      <Field name="bio" as={TextInput} id="bio" />
                      <ErrorMessage
                        name="bio"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-3">
                      <Label htmlFor="linkin">LinkedIn</Label>
                      <Field name="linkin" as={TextInput} id="linkin" />
                      <ErrorMessage
                        name="linkin"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="facebook">Facebook</Label>
                      <Field name="facebook" as={TextInput} id="facebook" />
                      <ErrorMessage
                        name="facebook"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Field name="twitter" as={TextInput} id="twitter" />
                      <ErrorMessage
                        name="twitter"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <Field name="instagram" as={TextInput} id="instagram" />
                      <ErrorMessage
                        name="instagram"
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-10">
                    <Button
                      type="submit"
                      className="w-1/2"
                      disabled={isSubmitting}
                    >
                      Submit
                    </Button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
