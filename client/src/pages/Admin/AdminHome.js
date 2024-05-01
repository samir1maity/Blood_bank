import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Welcome to the Blood Bank application, a comprehensive platform developed by Samir maity, a fourth-year student at Netaji Subhash Engineering College. This cutting-edge application is designed to address the critical need for efficient management of blood donation and distribution processes. Leveraging the power of the MERN (MongoDB, Express.js, React.js, Node.js) stack, this application offers a seamless user experience with its intuitive interface and robust functionality.

            At its core, the Blood Bank application serves as a centralized hub for managing blood inventory, donor information, and donation requests. Admin users have full access to the database, allowing them to oversee and regulate all aspects of blood donation operations. Through advanced features such as real-time analytics and reporting, administrators can gain valuable insights into donation trends, inventory levels, and user activity.

            One of the key strengths of the Blood Bank application lies in its versatility and scalability. Whether it's a small local blood donation center or a large-scale hospital network, the application can adapt to the unique needs of any organization. With its modular architecture and flexible design, new features and functionalities can be seamlessly integrated to meet evolving requirements.

            Furthermore, the Blood Bank application prioritizes user privacy and data security. Stringent authentication measures and data encryption techniques ensure that sensitive information remains protected at all times. Additionally, regular updates and maintenance procedures are implemented to uphold the application's performance and reliability standards.

            In summary, the Blood Bank application represents a significant advancement in the field of healthcare technology. By streamlining blood donation processes and enhancing transparency and efficiency, it aims to make a positive impact on the lives of patients in need of lifesaving blood transfusions. With its innovative approach and dedication to excellence, the Blood Bank application is poised to revolutionize the way blood donation services are managed and accessed.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
