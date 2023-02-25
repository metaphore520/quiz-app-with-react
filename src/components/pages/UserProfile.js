import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getDataDb, updateDataDb } from "../../dataLayer/db";
import TextInput from "../TextInput";
import User from "../User";

function UserProfile() {
  var userProfile = {};
  const [selectedImage, setSelectedImage] = useState();
  const [allUser, setAllUser] = useState([]);

  //const [name, setName] = useState("");
  //const [address, setAddress] = useState("");
  // const [profession, setAddress] = useState("");
  // const [versity, setAddress] = useState("");
  // const [mobile, setAddress] = useState("");
  // const [email, setAddress] = useState("");
  //var [selectedImage, setSelectedImage] = useState(null);

  let { currentUser } = useAuth();
  let url = `blogger/${currentUser.uid}`;
  let key = 0;
  var allBlogger = [];
  const getAll = () => {
    getDataDb(url).then((data) => {
      setAllUser(data);
    });
  };
  async function post() {
    //userProfile.ProfilePicture = JSON.stringify(userProfile.ProfilePicture);
    console.log(userProfile);
    await updateDataDb(url, "", "", userProfile);
  }
  const nameChange = (value) => {
    userProfile.Name = value;

    /// setUserProfile(...userProfile, userProfile.Name);
  };
  const addressChange = (value) => {
    userProfile.Address = value;
    //setUserProfile(...userProfile, userProfile.Address);
  };
  const professionChange = (value) => {
    userProfile.Profession = value;
    //setUserProfile(...userProfile, userProfile.Profession);
  };
  const mobileChange = (value) => {
    userProfile.Mobile = value;
    //setUserProfile(...userProfile, userProfile.Mobile);
  };
  const versityChange = (value) => {
    userProfile.Versity = value;
    //setUserProfile(...userProfile, userProfile.Versity);
  };
  const emailChange = (value) => {
    userProfile.Email = value;
    //setUserProfile(...userProfile, userProfile.Email);
  };
  async function profilePictureChange(file) {
    //console.log(selectedImage);
    // console.log(userProfile);
    // userProfile.ProfilePicture = [];
    //userProfile.ProfilePicture = await getAsByteArray(file);
    userProfile.ProfilePicture = file;

    //console.log(userProfile.ProfilePicture);
    //console.log(userProfile);

    //setUserProfile(...userProfile, userProfile.ProfilePicture);
  }

  return (
    <>
      <div className="row">
        <div className="col-md-5">
          <TextInput
            type="text"
            placeholder="Enter Name..."
            icon="person"
            value={userProfile.Name}
            onChange={(e) => nameChange(e.target.value)}
          ></TextInput>

          <TextInput
            type="text"
            placeholder="Enter Address..."
            icon="person"
            value={userProfile.Address}
            onChange={(e) => addressChange(e.target.value)}
          ></TextInput>
          <TextInput
            type="text"
            placeholder="Enter Email..."
            icon="person"
            value={userProfile.Email}
            onChange={(e) => emailChange(e.target.value)}
          ></TextInput>
          <TextInput
            type="text"
            placeholder="Enter Mobile..."
            icon="person"
            value={userProfile.Mobile}
            onChange={(e) => mobileChange(e.target.value)}
          ></TextInput>
          <TextInput
            type="text"
            placeholder="Enter Profession..."
            icon="person"
            value={userProfile.Profession}
            onChange={(e) => professionChange(e.target.value)}
          ></TextInput>
          <TextInput
            type="text"
            placeholder="Enter Versity..."
            icon="person"
            value={userProfile.Versity}
            onChange={(e) => versityChange(e.target.value)}
          ></TextInput>
          <div>
            {selectedImage && (
              <div>
                <img
                  alt="not fount"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                <button onClick={() => setSelectedImage(null)}>Remove</button>
              </div>
            )}
            <input
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
                profilePictureChange(event.target.files[0]);
              }}
            />
            <button onClick={post}>Post Data</button>
            <button onClick={getAll}>Get Data</button>
          </div>
        </div>
      </div>
      {/* UserProfile */}
      <div className="row">
        <div className="col-md-12">
          <User user={userProfile}></User>
        </div>
      </div>
      {/* UserProfile */}
    </>
  );
}

export default UserProfile;
