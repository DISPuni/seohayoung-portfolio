# seohayoung-portfolio

아래 안내 사항 대로 따라하셔서 local 환경에 코드 베이스를 다운받으신 후 관리하시면 됩니다!<br/>
추가 질문이 있으시다면 언제든 연락주세요. 🙂<br/><br/>

요구 사항 - 설치
-----
1. `git` 👉 https://goddaehee.tistory.com/m/216
2. 아래 '개인 컴퓨터 로컬 환경에 저장소 클론' 안내를 따라 파일을 보관하고 싶으신 디렉토리에 저장소를 복제해 주세요!
3. 복제한 프로젝트 폴더 내에 `README.md`가 있는 위치에서 command line으로 `python -m venv env`로 가상 환경 폴더를 만들어 주세요! 👉 그 상태로 source env/bin/activate 하시면 가상 환경 폴더에 접속하게 됩니다. 이 과정을 거치는 이유는 아래 설치할 패키지들을 폴더 안의 가상 환경에만 적용되게 하기 위함입니다.
4. `npm` 👉 https://hello-bryan.tistory.com/m/95
5. 위에 설치한 `npm`으로 `yarn` 설치 👉 https://heeeyomi.tistory.com/223<br/>
   간단하게 `yarn install`해 주시면 됩니다!<br/><br/>
   
개인 컴퓨터 로컬 환경에 저장소 클론
-----
아래 command line을 terminal(window 쓰시면 window cmd) 창에서 입력 (꼭 복제하고픈 디렉토리에 들어가셔서 해 주세요!)
```
git clone https://github.com/{username}/{repo-name}.git
cd {repo-name} // 로컬 프로젝트 폴더로 들어감 
```

로컬 환경에서 실시간으로 수정 사항 확인해야 할 때
-----
가상 환경 폴더에 접속한 뒤 프로젝트 폴더 내에서 `yarn start`해 주시면 로컬 환경에서 실시간으로 수정 사항 확인할 수 있는 웹페이지에 자동으로 접속됩니다.<br/><br/>


수정된 코드를 웹사이트에 반영하고 싶으신 경우
-----
로컬 프로젝트 폴더 내에서 `yarn deploy`를 입력해 주시면 자동으로 배포 사이트에 반영이 됩니다! (10~20분 정도 소요될 수 있음)<br/><br/>

⚠️ **주의하실 점** ⚠️
- 양도 받으신 후 `package.json` 파일 내의 `"homepage": "https://onmay16.github.io/seohayoung-portfolio/"`을 바꿔 주셔야 합니다.
  
   해당 도메인은 제가 가지고 있던 저장소와 연결되어 있던 것이기 때문에, 새로 배포하신 의뢰인분의 깃허브 계정과 연결된 도메인으로 변경해야 합니다.
- 커스텀 도메인 적용 시 마찬가지로 커스텀 도메인으로 변경해 주셔야 합니다.

   참고 👉 https://velog.io/@ricale/Create-React-App-%EC%9C%BC%EB%A1%9C-GitHub-Pages-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0
   
블로그 글 추가하는 방법
-----
**1.`Blog.js`**
```
<div className='cards-row'>
    <div className='first-card' onClick={() => toBlogPost(1)}><Card title='#1. 광고 플랫폼에 대하여' image={example1} /></div>
    <div className="second-card" onClick={() => toBlogPost(2)}><Card title='#2' image={example2} /></div>
</div>
<div className='cards-row'>
    <div className="first-card"><Card title='#3' image={example3} /></div>
    <div className="second-card"><Card title='#4' image={example4} /></div>
</div>
<div className='cards-row'>
    <div className="first-card"><Card title='#5' image={example5} /></div>
    <div className="second-card"><Card title='#6' image={example6} /></div>
</div>
```
코드 구성을 보시면 카드가 두 개씩 묶여져 있는 걸 확인하실 수 있는데 예시를 위해 6개까지 추가해 둔 상태입니다.<br/>
더 많은 게시글을 추가할 경우 `cards-row` `<div>` 태그도 같이 복사해 주셔야 스타일링이 유지됩니다.<br/>
<br/>
또한 각 카드 `<div>`태그에 `onClick`이라고 되어있는 속성은 카드 클릭 시 해당 포스팅으로 연결하도록 해 주는 인터랙션이므로 추가해 주셔야 합니다.<br/>
숫자만 해당 포스팅에 따라 3, 4, ... 이런 식으로 바꿔서 설정해 주시면 됩니다.<br/>
<br/>
다음으로 `<div>` 태그 내에 `Card` 컴포넌트가 있는데, 이 부분에서 title과 이미지를 설정해 주시면 자동으로 각 게시글 카드에 반영됩니다.<br/>
이미지의 경우 원하는 폴더에 저장해 주신 후,
```
import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
.
.
.
```
이런 식으로 이미지를 불러와 `image={불러온 이미지 이름}` 설정해 주시면 됩니다.<br/>
<br/>
**2. 포스팅 컨텐츠 추가하기**
```
import React from 'react'

import '../BlogPost.css'

function 포스팅컴포넌트이름() {
    return (
        <div className='blog-content-body'>
            내용
        </div>
    )
}

export default 포스팅컴포넌트이름
```
안에 내용은 html로 작성하고 싶은 대로 작성해 주시면 됩니다.<br/>
<br/>
**3.`BlogPostHeader.js`**
```
import Post1 from './BlogContent/Post1'
import Post2 from './BlogContent/Post2'
```
포스팅은 헤더와 컨텐츠로 나뉘어져 있습니다.<br/>
해당 파일에서 헤더 자체는 수정 하능하며, 컨텐츠의 경우 따로 파일을 만들어 불러와 주는 방식입니다.<br/>
위와 같이 컨텐츠를 저장한 경로에서 컨텐츠를 불러와줍니다.<br/>
```
const postTitle = [
    { id:1, title:'#1. 광고 플랫폼에 대하여' , subtitle:'subtitle' },
    { id:2, title:'#2' , subtitle:'subtitle' },
]
```
먼저 `postTitle`에 `id`, `title`, 그리고 `subtitle`을 추가해 줍니다.<br/>
`id`는 `Blog.js`에 추가해 준 것과 동일하게 설정해 줍니다.<br/>
<br/>
```
useEffect(() => {
        if (postId.id === '1') {
            setPost(<Post1 />)
        }
        else if (postId.id === '2') {
            setPost(<Post2 />)
        }
    }, [])
```
다음으로는 실직적인 포스팅을 렌더링해 주기 위해 위 코드를 수정해 줍니다.<br/>
간단하게 `else if`문을 아래에 복사 붙여넣기 하여 숫자만 바꿔 주시면 됩니다.<br/>
<br/>

서브 페이지 글 추가하는 방법
-----
**1. `Media.js`, `Fashion.js`, `Visual.js`**
```
import example1 from '../assets/examples/example1.jpeg'
import example2 from '../assets/examples/example2.png'
import example3 from '../assets/examples/example3.jpeg'
.
.
.
```
썸네일을 위한 이미지를 불러옵니다.<br/>
<br/>
```
const itemList = [
        { id: 1, title: 'DD', type: 'UIUX', image: example1 },
        { id: 2, title: 'test1', type: 'UIUX', image: example2 },
        { id: 3, title: 'test2-1', type: 'Motion', image: example3 },
        { id: 4, title: 'test2-2', type: 'Motion', image: example4 },
        { id: 5, title: 'test3-1', type: 'Interaction', image: example5 },
        { id: 6, title: 'test3-2', type: 'Interaction', image: example6 },
        { id: 7, title: 'test4-1', type: 'Animation', image: example7 },
        { id: 8, title: 'test4-2', type: 'Animation', image: example8 },
    ]
```
itemList에 서브 포스팅 `id`,`title`, `type`, 불러온 이미지를 알맞게 추가해 줍니다.<br/>
⚠️ **주의하실 점** ⚠️<br/>
`type`의 경우 오타가 있으면 해당 아이템에 필터링 효과가 적용되지 않을 수 있으니 유의 바랍니다.<br/>
<br/>
**2. 서브 포스트 추가**<br/>
<img width="254" alt="image" src="https://user-images.githubusercontent.com/87830290/205415320-b58a3a64-efec-4031-8600-322747b6c32b.png"><br/>
위에 보시면 서브별로 제가 만들어 둔 폴더를 확인하실 수 있습니다.<br/>
블로그에 포스팅 추가하는 것처럼 각 서브에 추가해 주시면 됩니다.
