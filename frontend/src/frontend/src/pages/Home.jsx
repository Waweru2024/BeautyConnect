export default function Home() {
  return (
    <div className="splash-screen">
      <div className="logo-box">
        💇‍♀️
      </div>

      <h1>BeautyConnect</h1>

      <p>Connecting Beauty Professionals Across Kenya</p>
    </div>
  );
}
.app-screen{
  width:390px;
  height:844px;
  background:white;
  border-radius:30px;
  padding:40px 25px;

  display:flex;
  flex-direction:column;
  align-items:center;
}

.hero-image{
  width:220px;
  height:220px;
  border-radius:50%;
  background:#ffe4f1;

  display:flex;
  justify-content:center;
  align-items:center;

  font-size:90px;

  margin-top:40px;
  margin-bottom:40px;
}

.app-screen h1{
  color:#d63384;
  font-size:34px;
  margin-bottom:15px;
}

.app-screen h2{
  text-align:center;
  font-size:26px;
  margin-bottom:20px;
}

.app-screen p{
  text-align:center;
  color:#666;
  line-height:1.6;
  margin-bottom:50px;
}

.app-screen button{
  width:100%;
  padding:18px;
  border:none;
  border-radius:15px;
  background:#d63384;
  color:white;
  font-size:18px;
  font-weight:bold;
    }
