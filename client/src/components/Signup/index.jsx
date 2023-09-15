import "./style.css";

function Signup (){
    return (
        <>
            <section class="container">
                <div class="login-container">
                    <div class="circle circle-one"></div>
                    <div class="form-container">
                        <img src="image.png" alt="illustration" class="illustration" />
                        <h1 class="opacity">Sign Up</h1>
                        <form>
                            <input type="text" placeholder="USERNAME" name="name" required />
                            <input type="text" placeholder="EMAIL" name="email" required/>
                            <div class="email error"></div>
                            <input type="password" placeholder="PASSWORD" name="password" required />
                            <div class="password error"></div>
                            
                            <button type="submit" class="opacity">Sign Up</button>
                            <div class="register-forget opacity">
                                
                            </div>
                        </form>
                        <div class="error-message"></div>
                    </div>
                    <div class="circle circle-two"></div>
                </div>
                <div class="theme-btn-container"></div>
            </section>
        </>
    );
}

export default Signup;
