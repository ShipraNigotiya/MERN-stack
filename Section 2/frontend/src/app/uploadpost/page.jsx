'use client';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const UploadPost = () => {

    const postForm = useFormik({
        initialValues: {
            username: '',
            caption: '',
            image: '',
            postedOn: new Date()
        },
        onSubmit: (values) => {
            
            // making a request to backend server
            fetch('http://localhost:5000/post/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
            .then((response) => {
                console.log(response.status);
                toast.success('Post created successfully');
            }).catch((err) => {
                console.log(err);
                toast.error('Something went wrong');
            });

            console.log(values);
        }
    })

    const uploadFile = (e) => {
        
        const file = e.target.files[0];
        console.log(file);

        const fd = new FormData();
        fd.append('myfile', file);

        fetch('http://localhost:5000/util/uploadfile', {
            method: 'POST',
            body: fd
        })
        .then((response) => {
            if(response.status === 200){
                toast.success('File Uploaded');
                response.json()
                .then((data) => {
                    postForm.values.image = data.savedFile;
                })

            }else{
                toast.error('Some Error Occured');
            }
        }).catch((err) => {
            console.log(err);
            toast.error('Some Error Occured');
        });
    }

    return (
        <div>
            <div className="container">
                <div className="card shadow my-4">
                    <div className="row g-0">
                        <div className="col-xl-6 d-none d-xl-block">
                            <div style={{
                                backgroundImage: `url('https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg')`,
                                height: '100%',
                                backgroundPosition: 'center',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}>

                            </div>
                            {/* <img
                    src="https://assets.materialup.com/uploads/7563d4bc-0ed9-4202-a86c-ac8dc46e73ef/preview.jpg"
                    alt="Sample"
                    className="img-fluid"
                  /> */}
                        </div>
                        <div className="col-xl-6">

                            <div className="card-body p-md-5">
                                <h3 className="mb-5 text-primary fw-bold">
                                    Create a Post
                                </h3>
                                <form onSubmit={postForm.handleSubmit}>

                                    <div class="mb-3">
                                        <label for="" class="form-label">Username</label>
                                        <input
                                            type="text"
                                            id="username"
                                            onChange={postForm.handleChange}
                                            value={postForm.values.username}
                                            class="form-control"
                                            placeholder=""
                                        />
                                    </div>

                                    <div class="mb-3">
                                        <label for="" class="form-label">Caption</label>
                                        <input
                                            type="text"
                                            id="caption"
                                            onChange={postForm.handleChange}
                                            value={postForm.values.caption}
                                            class="form-control"
                                            placeholder=""
                                        />
                                    </div>

                                    <div class="mb-3">
                                        <label for="" class="form-label">Image</label>
                                        <input
                                            type="file"
                                            onChange={uploadFile}
                                            class="form-control"
                                            placeholder=""
                                        />
                                    </div>


                                    <div className="d-flex justify-content-end pt-3">
                                        <button type="submit" className="btn btn-primary ms-2">
                                            Submit form
                                        </button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadPost;