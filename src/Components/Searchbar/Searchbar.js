import { useState } from 'react';
import './Searchbar.css';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (imageName.trim() === '') {
      alert('Введіть назву картинки');
      return;
    }
    onSubmit(imageName);
    setImageName('');
  };

  const handleNameChange = e => {
    setImageName(e.currentTarget.value.toLowerCase());
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={handleNameChange}
          value={imageName}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

// class Searchbar extends Component {
//   state = {
//     imageName: '',
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     if (this.state.imageName.trim() === '') {
//       toast('Введіть назву картинки');
//       return;
//     }
//     this.props.onSubmit(this.state.imageName);
//     this.setState({ imageName: '' });
//   };

//   handleNameChange = e => {
//     this.setState({ imageName: e.currentTarget.value.toLowerCase() });
//   };

//   render() {
//     return (
//       <header className="Searchbar">
//         <form onSubmit={this.handleSubmit} className="SearchForm">
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             onChange={this.handleNameChange}
//             value={this.state.imageName}
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;
