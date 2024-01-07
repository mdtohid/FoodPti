import { useState } from "react";
import { useForm } from "react-hook-form";

const SelectPopular = ({setSelectedItem}) => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [selectedImage, setSelectedImage] = useState(null);
    // console.log(selectedImage);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(e.target);
        console.log(e.target.files);
        console.log(file);

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                // Update the state with the data URL of the selected image
                setSelectedImage(reader.result);
            };

            // Read the selected image file as a data URL
            reader.readAsDataURL(file);
        } else {
            // Clear the selected image if no file is selected
            setSelectedImage(null);
        }
    };

    const onSubmit =(data) => {
        const name = data.name;
        const selectedItem = {
            name: name,
            img: selectedImage
        }

        setSelectedItem(selectedItem);
        reset();
    }


    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <div className='w-full	my-5'>
                    <h1 className='text-3xl text-purple-400 text-center my-5'>You can add a item</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className='w-11/12 mx-auto flex flex-col gap-4'>

                        <input
                            placeholder="Enter Name" className="input input-bordered "
                            {...register("name", { required: "Name is required" })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name && <p role="alert">{errors.name?.message}</p>}

                        <input
                            type="file" placeholder="" className="file-input file-input-accent  file-input-bordered w-full"
                            {...register("img", { required: "Image is required" })}
                            aria-invalid={errors.img ? "true" : "false"}
                            onChange={handleImageChange}
                        />
                        {errors.img && <p role="alert">{errors.img?.message}</p>}

                        <input className='btn btn-outline w-full' type="submit" value='ADD ITEM' />
                    </form>
                </div>
                {/* ......................... */}
                <div className="modal-action">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
};

export default SelectPopular;