import React from 'react';

function Admin() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#003300' }}>Admin Panel</h1>

      {/* Section for Adding Images */}
      <div
        style={{
          margin: '50px auto',
          maxWidth: '500px',
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '10px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', color: '#003300' }}>Add Infographic</h2>
        <form>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Image Title:
            <input
              type="text"
              placeholder="Enter image title"
              style={{
                display: 'block',
                width: '100%',
                margin: '10px 0',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Image File:
            <input
              type="file"
              style={{
                display: 'block',
                width: '100%',
                margin: '10px 0',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              display: 'block',
              width: '100%',
              backgroundColor: '#003300',
              color: '#fff',
              padding: '10px',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Add Image
          </button>
        </form>
      </div>

      {/* Section for Deleting Images */}
      <div>
        <h2 style={{ color: '#003300' }}>Delete Images</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: '1' }}>Sample Image 1</span>
            <button
              style={{
                backgroundColor: '#ff3333',
                color: '#fff',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ flex: '1' }}>Sample Image 2</span>
            <button
              style={{
                backgroundColor: '#ff3333',
                color: '#fff',
                padding: '5px 10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Admin;
