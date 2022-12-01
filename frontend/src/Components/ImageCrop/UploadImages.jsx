import React, { useRef } from "react";
import { IoImages, IoTrashBinOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  deleteProfileImage,
  editProfileImage,
} from "../../Pages/Sign/signSlice";
import { filter, map, uniqueId } from "lodash";

const UploadImages = ({ images, setImages }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const handleChange = () => {
    ref.current.click();
  };
  const handleClick = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", file.name);
    dispatch(editProfileImage(formData)).then(({ error, payload }) => {
      if (!error) {
        setImages([...images, payload]);
      }
    });
  };

  const deleteImage = (e) => {
    const name = e.target.name;
    const fileName = name.split("/");
    const body = {
      filename: fileName[fileName.length - 1],
    };
    dispatch(deleteProfileImage(body)).then(({ error }) => {
      if (!error) {
        setImages(filter(images, (image) => image !== name));
      }
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {map(images, (image, index) => (
          <div
            key={uniqueId("image")}
            className="flex flex-col mx-2 rounded overflow-hidden "
          >
            <img src={image} alt="" className="w-[150px] h-[100px]" />
            <div className="flex w-full justify-evenly pt-2">
              <button onClick={deleteImage} name={image}>
                <IoTrashBinOutline
                  size={20}
                  color="#f00"
                  className="pointer-events-none"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <input ref={ref} type="file" className="hidden" onChange={handleClick} />
      <div>
        <button
          className="p-2 border rounded border-neutral-400 mr-2"
          onClick={handleChange}
        >
          <IoImages size={20} color="#777" />
        </button>
      </div>
    </div>
  );
};

export default UploadImages;
