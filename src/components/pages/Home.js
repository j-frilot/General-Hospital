import React from "react";
import "materialize-css/dist/css/materialize.css";

const HOME = () => {
    return (
        <>
            <div className="text-xl my-5 bg-red-500 flex justify-between items-center">
                <h1 className="ml-48 py-5">
                    <span className="text-white font-semibold">
                        Coronavirus Update:
                    </span>{" "}
                    What patients and familts need to know.{" "}
                    <i className="fas fa-arrow-circle-right"></i>
                </h1>
                <i className="far fa-times-circle mr-48"></i>
            </div>
            <div className="mx-48 flex justify-center ">
                <div className="  h-auto">
                    <img src="images/home-top-1.jpg" alt="hospital 1" />
                </div>
                <div className="  h-auto">
                    <img src="images/home-top-2.jpg" alt="hospital 2" />
                </div>
            </div>
            <hr className="border-red-500 border-4 my-5 mx-48" />
        </>
    );
};

export default HOME;
