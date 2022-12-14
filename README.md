# seohayoung-portfolio

아래 안내 사항 대로 따라하셔서 local 환경에 코드 베이스를 다운받으신 후 관리하시면 됩니다!<br/>
추가 질문이 있으시다면 언제든 연락주세요. 🙂 (크몽 메신저 또는 onmay16@gmail.com) <br/><br/>

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

서브 페이지 추가하는 방법
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
블로그에 포스팅 추가하는 것처럼 각 서브에 추가해 주시면 됩니다.<br/>
<br/>
**3. 서브 페이지 내용에 이미지 및 영상 추가**<br/>
새로 만든 포스트 파일 (e.g., `MediaPost5.js`)에 아래 내용을 그래도 복사해서 붙여 넣습니다.
```
import React from 'react'

import '../ServePost.css'

function Untitled() {
  return (
    <div className='serve-content-body'>
       // 코드 추가할 위치
    </div>
  )
}

export default Untitled
```
그리고 생성하는 서브 포스트 타입(Fashion, Visual, Media) 그리고 번호에 맞추어 `Untitled` 두 곳을 파일 이름과 똑같이 맞춰 주세요. (확장자는 붙이지 않으셔도 됩니다.)<br/>
이제 코드 추가할 위치라고 써 있는 부분에 이미지랑 비디오를 추가해 주시면 됩니다.<br/>
- 이미지의 경우<br/>
`import '../ServePost.css'` 밑에 이미지를 import 해 줍니다.
```
import todaywho1 from '../../../assets/media/uiux_todaywho/todaywho_001.png'
// import 다음은 이미지를 이름 지정
// from 다음은 경로 지정 (이때 보시는 것처럼 작은 따옴표 안에 경로를 지정해 주셔야 합니다.)
```
그리고 코드 추가할 위치에
```
<img className='content-img' src={imageName} alt="" />
// imageName은 import 하실 때 지정한 이름을 넣어 주시면 됩니다.
```
- 영상의 경우<br/>
아래 코드를 복사해 원하시는 위치에 붙여넣어 줍니다.
```
<iframe
    className='responsive-iframe'
    src={`https://www.youtube.com/embed/_gfihwT4RTs`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title="Embedded youtube"
/>
```
그리고 링크가 들어가는 코드 라인에 맨 마지막 영상 링크 아이디(위 코드에서는 `_gfihwT4RTs`)만 가지고 계신 유튜브 주소 아이디로 변경 후 저장해 줍니다.<br/>
예를 들어 가지고 계산 유튜브 영상 주소가 https://youtu.be/u1gb4znNeRE라면 `u1gb4znNeRE`만 복사해서 해당 위치에 붙여넣기 해 주시면 됩니다.<br/>
<br/>
설명 중 이해가 안 되는 게 있으실 경우 이미 존재하는 `MediaPost`나 `VisualPost` 파일을 참고하는 걸 추천 드립니다!

<br/>
**4.`MediaPostHeader.js`, `VisualPostHeader.js`, `FashionPostHeader.js`**
```
import MediaPost1 from './MediaContent/MediaPost1'
import MediaPost2 from './MediaContent/MediaPost2'
```
블로그와 마찬가지로 포스팅은 헤더와 컨텐츠로 나뉘어져 있습니다.<br/>
해당 파일에서 헤더 자체는 수정 하능하며, 컨텐츠의 경우 따로 파일을 만들어 불러와 주는 방식입니다.<br/>
위와 같이 컨텐츠를 저장한 경로에서 컨텐츠를 불러와줍니다.<br/>
```
const postInfo = [
    { id: 1, title: 'Pop', date: '22.03.22~', type: 'Animation' },
    { id: 2, title: 'Shimshim', date: '22.12.24~', type: 'Interaction' },
    { id: 3, title: 'Souvenir', date: '22.12.24~', type: 'Motion' },
    { id: 4, title: 'Famsupport', date: '22.12.24~', type: 'UIUX' },
    { id: 5, title: 'Today Who', date: '22.12.24~', type: 'UIUX' },
]
```
먼저 `postInfo`에 `id`, `title`,`date` 그리고 `type`을 추가해 줍니다.<br/>
`id`는 `Media.js`에 추가해 준 것과 동일하게 설정해 줍니다.<br/>
<br/>
```
useEffect(() => {
        if (postId.id === '1') {
            setNotFound(false)
            setPost(<MediaPost1 />)
        }
        else if (postId.id === '2') {
            setNotFound(false)
            setPost(<MediaPost2 />)
        }
    }, [])
```
다음으로는 실직적인 포스팅을 렌더링해 주기 위해 위 코드를 수정해 줍니다.<br/>
간단하게 `else if`문을 아래에 복사 붙여넣기 하여 숫자만 바꿔 주시면 됩니다.<br/>
<br/>
