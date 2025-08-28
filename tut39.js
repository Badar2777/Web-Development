import { createServer } from 'node:http';

const server = createServer((req, res) =>{
    res.writeHead(200, {"content-type": 'text/html'});
    res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Facebook - log in or sign up</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Open+Sans&family=Poppins&display=swap"
        rel="stylesheet">
    <style>
        body {
            font-family: "DM Sans", sans-serif;
            font-optical-sizing: auto;
            font-style: normal;
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            background-color: #f1f1f1;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;

        }

        .container {
            display: flex;
            height: 430px;
            width: 1010px;
            margin: 50px 50px 50px 20px;
            padding: 50px 24px 24px 24px;
            box-sizing: content-box;
        }

        .left {
            width: 541px;

        }

        .left h1 {
            color: #0866ff;
            font-size: 60px;
            padding: 25px 0 5px 0;
            padding-left: 15px;
            margin: 0;
        }

        .left p {
            font-size: 28px;
            padding-left: 15px;
            margin: 0;
        }

        .right {
            width: 415px;
        }

        .box {
            width: 375px;
            background-color: white;
            border-radius: 6px;
            box-shadow: 0 0 5px 0px #9191915e;
            margin-left: 40px;
        }

        .txt {
            padding: 10px 15px;
        }

        .txt input {
            height: 22px;
            width: 316px;
            margin: 7px 0px;
            border: 1px solid #8a8a8a57;
            outline: none;
            border-radius: 6px;
            padding: 12px;
            font-size: 16px;
            font-family: inherit;
        }

        .txt input:focus {
            border: 1px solid #1e74ff;
        }

        .btn {
            padding: 0 15px;
        }

        .btn button {
            height: 45px;
            width: 340px;
            border-radius: 6px;
            border: none;
            background-color: #0866ff;
            color: white;
            padding: 0px;
            text-align: center;
            font-family: inherit;
            font-size: 20px;
            font-weight: bolder;
            cursor: pointer;
            transition: .3s ease;
        }

        .btn button:hover {
            background-color: #1e74ff;
        }

        .forgot {
            text-align: center;
            margin: 12px 0;
        }

        .forgot a {
            text-decoration: none;
            color: #0866ff;
            font-size: 15px;
        }

        .forgot a:hover {
            text-decoration: underline;
        }

        hr {
            border: .5px solid #d3d3d391;
            margin: 25px 20px;
        }

        .btn2 button {
            width: 190px;
            border-radius: 6px;
            height: 45px;
            text-align: center;
            font-family: inherit;
            font-size: 17px;
            font-weight: bold;
            margin-left: 92.5px;
            margin-bottom: 25px;
            border: none;
            background-color: #43b92c;
            cursor: pointer;
            transition: .1s ease;
        }
        .btn2 button a{
            text-decoration: none;
            color: white;
        }

        .btn2 button:hover {
            background-color: #40af29;
        }

        .para {
            text-align: center;
            font-size: 14px;
            margin: 20px;
            margin-right: 0;
        }

        .para a {
            text-decoration: none;
            color: black;
            font-weight: bold;
        }

        .para a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="left">
            <h1>facebook</h1>
            <p>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div class="right">
            <div class="box">
                <form action="">
                    <div class="txt">
                    <input type="text" placeholder="Email Address and Phone Number" required>
                    <input type="text" placeholder="Password" required>
                </div>
                <div class="btn">
                    <button type="">Log in</button>
                </div>
                <div class="forgot">
                    <a href="#">Forgotten password?</a>
                </div>
            </form>
                <hr>
                <div class="btn2">
                    <button><a href="">Create new account</a></button>
                </div>
            </div>
            <div class="para">
                <p><a href="#">Create a Page</a> for a celebrity, brand or business</p>
            </div>
        </div>
    </div>


</body>

</html>`);
})

server.listen(3000, '127.0.0.1', ()=>{
    console.log("Server is listening at 127.0.0.1");
})