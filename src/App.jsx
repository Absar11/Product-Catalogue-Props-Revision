
import './App.css'
import Card from './components/Card';

function App() {
  const products = [
    {
      title: "Wireless Headphones",
      price: "$59.99",
      description: "High-quality over-ear wireless headphones with noise cancellation.",
      image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_551_ANC_Pro.347_1.jpg?v=1737546044"
    },
    {
      title: "Smartwatch",
      price: "$129.00",
      description: "Track your fitness and notifications with this stylish smartwatch.",
      image: "https://m.media-amazon.com/images/I/61GRy-zyB-L.jpg"
    },
    {
      title: "Gaming Mouse",
      price: "$35.50",
      description: "Ergonomic mouse with adjustable DPI and RGB lighting.",
      image: "https://m.media-amazon.com/images/I/61Mk3YqYHpL.jpg"
    },
    {
      title: "Mechanical Keyboard",
      price: "$89.00",
      description: "Durable keyboard with customizable RGB backlight and clicky keys.",
      image: "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-MECHANICAL-KEYBOARDS-2048px-0673.jpg"
    },
    {
      title: "Bluetooth Speaker",
      price: "$45.00",
      description: "Portable speaker with deep bass and long battery life.",
      image: "https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw="
    },
    {
      title: "External Hard Drive",
      price: "$79.99",
      description: "1TB USB 3.0 external hard drive for fast backups.",
      image: "https://media.istockphoto.com/id/496402410/photo/external-hard-drive-for-backup.jpg?s=612x612&w=0&k=20&c=Ul6uXVrMdFEmIC7xH_f54tWfYQSExa1_j70eP-5fuyM="
    },
    {
      title: "Webcam",
      price: "$39.99",
      description: "1080p HD webcam with built-in microphone for video calls.",
      image: "https://images.unsplash.com/photo-1623949556303-b0d17d198863?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViY2FtfGVufDB8fDB8fHww"
    },
    {
      title: "USB-C Hub",
      price: "$29.00",
      description: "Multiport adapter with HDMI, USB 3.0, SD card, and more.",
      image: "https://media.startech.com/cms/products/gallery_large/5g2a2cpdb-usb-c-hub._main.jpg"
    }
  ];


  return (
    <>
      <h1>Our Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {
          products.map((product, index) => (
            <Card
              key={index}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))
        }
      </div>

    </>
  )
}

export default App
