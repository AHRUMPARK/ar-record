 //callback Hell example
 class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'dream') || //1.아이디가 엘리이고 비번이 드림이거나
                (id === 'coder' && password === 'academy')  //  아이디가 코더이거나 비번이 아카데미라면
            ) {                                             //2. 우리가 전달 받은 onSuccess 함수를 콜벡을 불러줘
                onSuccess(id);
            } else {                        
                onError(new Error('not found'));            //3. 만약 1번이 해당되지 않으면, onError 함수를 콜벡해줘 > Error 라는 오브젝트가 not found를 전달
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {                                   //사용자가 역할을 받아 올 때 1초뒤에 코드블럭 실행 
            if (user === 'ellie') {                         // 사용자가 'ellie'이면, onSuccess 실행
                onSuccess({name: 'ellie', role: 'admin'});  // 이름은 엘리, 역할은 어드민을 전달
            } else {                                        //엘리가 아니라면?
                onError(new Error('no access'));            //에러의 오브젝트가 no access라고 전달
            }
        }, 1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
UserStorage.loginUser(
    id,
    password,
    user => {
        UserStorage.getRoles(
            user,
            userWithRole => {
                alert('hello ${userWithRole.name}, you have a ${user.role} role')
            },
            error =>{}
        );
    },
    (error)=>{console.log(error)}
    );