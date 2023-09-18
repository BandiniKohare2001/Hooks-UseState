import ReactDOM from 'react-dom/client';
import Card from './component/Card/Card';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
<div className='con'>
  <Card imageUrl="https://tse4.mm.bing.net/th?id=OIP.0bPWGEZ-9U6pNhBvD0xbQAHaE7&pid=Api&P=0&h=180" name="Vada Pav" />
  <Card imageUrl="https://tse3.mm.bing.net/th?id=OIP.YeFpI9Tj5j-7gzHy2jt8EgHaEK&pid=Api&P=0&h=180" name="Thali" />
  <Card imageUrl="https://tse4.mm.bing.net/th?id=OIP.dzoxDyY1YUccvdSz_VMi9QHaFj&pid=Api&P=0&h=180" name="Puri Bhaji" />
  <Card imageUrl="https://tse3.mm.bing.net/th?id=OIP.Rvw4l4U_FqcirhpeGp080gHaEK&pid=Api&P=0&h=180" name="Dosa" />
</div>
 </>
);
