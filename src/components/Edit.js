import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getbookdetail } from '../services/Apicalls';
import { editbook } from '../services/Apicalls';

function Edit() {
    const [books, setbooks] = useState({ title: '', author: '',pages:'', price: '', language: '', image: null });
    const { search } = useLocation();
    const navigate = useNavigate(); 
    const queryParams = new URLSearchParams(search);
    const id = queryParams.get('id');

    async function bookdetail(id) {
        let res = await getbookdetail(id);
        setbooks(res.data);
    }

    console.log(id);

    async function submit(event) {
        event.preventDefault();
        let ubooks={...books}//create a copy
        if(typeof ubooks.image== 'string'){//if image file is not selected then we delete the image field property from books object sends the updated
            //object call apicall
            delete ubooks.image
        } 
        let res = await editbook(id,ubooks);//we send updated book object with api call
          console.log(res)
        navigate('/view'); 
    }

    useEffect(() => {
        bookdetail(id);
    }, []);

    return (
        <div>
        <h1 className="text-center text-light fw-bold text-dark mt-3 mb-3">Edit Books</h1>
                <div className="container bg-primary border border-3 p-5 mt-5 border-secondary w-50">
                    <form onSubmit={submit}>
                        <div className="mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the title"
                                value={books.title}
                                onChange={(event) => setbooks({ ...books, title: event.target.value })}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the author"
                                value={books.author}
                                onChange={(event) => setbooks({ ...books, author: event.target.value })}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter the price"
                                value={books.price}
                                onChange={(event) => setbooks({ ...books, price: event.target.value })}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter no of pages"
                                value={books.pages}
                                onChange={(event) => setbooks({ ...books, pages: event.target.value })}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the language"
                                value={books.language}
                                onChange={(event) => setbooks({ ...books, language: event.target.value })}
                            />
                        </div>
                        <div className="mb-3 mt-3">
                            <img src={books.image} alt="Book" height="80px" width="80px" />
                            <input
                                type="file"
                                className="form-control"
                                onChange={(event) => setbooks({ ...books, image: event.target.files[0] })}
                            />
                        </div>
                        <button type="submit" className="btn btn-danger fs-5">ADD</button>
                    </form>
                    </div>
                </div>
    );
}

export default Edit;