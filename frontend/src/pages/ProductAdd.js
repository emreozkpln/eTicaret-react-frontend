import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup"
import { Button } from 'semantic-ui-react'
import KodlamaioTextInput from '../utilities/customFormControls/KodlamaioTextInput'

export default function ProductAdd() {

    const initialValue = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })
    return (
        

            <Formik 
            initialValues={initialValue}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values) 
            }}
            >

                <Form className="ui form">
                    <KodlamaioTextInput name="productName" placeholder="Ürün adı" />

                    <KodlamaioTextInput name="unitPrice" placeholder="Ürün fiyatı" />

                    <Button color="green" type="submit">Ekle</Button>
                </Form>
            </Formik>
        
    )
}
