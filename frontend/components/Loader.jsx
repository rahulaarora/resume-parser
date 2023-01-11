import { Dna, InfinitySpin } from "react-loader-spinner";
function Loader() {
  return (
    <div className="loader-component">
      {/* <div className="alert alert-info" role="alert">
                Uploading! Please wait...
            </div> */}
      {/* <Dna
                visible={true}
                height="150"
                width="150"
                ariaLabel="dna-loading"
                wrapperStyle={{"position": "absolute", "top": "50%", "left": "50%", "transform": "translate(-50%, -50%)"}}
                wrapperClass="dna-wrapper"
            /> */}
      <InfinitySpin width="200" color="green" />
      <p>Do Not Refresh!</p>
    </div>
  );
}

export default Loader;
