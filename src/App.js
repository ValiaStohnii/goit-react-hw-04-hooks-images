import { useState } from 'react';
import './App.css';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Modal from './Components/Modal/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectIMG, setSelectIMG] = useState('');

  const toggleShowModal = () => {
    setShowModal(state => !state.showModal);
  };

  const toggleModal = ({ largeIMG }) => {
    setShowModal(state => !state.showModal);
    setSelectIMG(largeIMG);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={setImageName} />
      <ImageGallery imageName={imageName} onImageClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleShowModal}>
          <img src={selectIMG} alt={imageName} />
        </Modal>
      )}
    </div>
  );
}
// class App extends Component {
//   state = {
//     imageName: '',
//     showModal: false,
//     selectIMG: '',
//   };

//   formSubmit = imageName => {
//     this.setState({ imageName });
//   };

//   toggleShowModal = () => {
//     this.setState(state => ({
//       showModal: !state.showModal,
//     }));
//   };

//   toggleModal = ({ largeIMG }) => {
//     this.setState(state => ({
//       showModal: !state.showModal,
//       selectIMG: largeIMG,
//     }));
//   };

//   render() {
//     const { showModal, imageName, selectIMG } = this.state;
//     return (
//       <div className="App">
//         <Searchbar onSubmit={this.formSubmit} />
//         <ToastContainer />
//         <ImageGallery imageName={imageName} onImageClick={this.toggleModal} />
//         {showModal && (
//           <Modal onClose={this.toggleShowModal}>
//             <img src={selectIMG} alt={imageName} />
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
