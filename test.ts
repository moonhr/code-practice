// ShinChan.ts
class ShinChan {
    name: string;
    age: number;
    personality: string[];
    favoriteThings: string[];
    family: { father: string; mother: string; sister: string };

    constructor() {
        this.name = "신짱구";
        this.age = 5;
        this.personality = ["장난꾸러기", "엉뚱함", "호기심이 많음"];
        this.favoriteThings = ["초코비", "액션가면"];
        this.family = {
            father: "신형만",
            mother: "봉미선",
            sister: "신짱아"
        };
    }

    dance() {
        console.log(`${this.name}가 춤을 춥니다. 🎵`);
    }

    sing() {
        console.log(`${this.name}가 노래를 부릅니다. 🎤`);
    }

    prank() {
        console.log(`${this.name}가 장난을 칩니다. 🤪`);
    }
}

// 모듈 내보내기
export default ShinChan;

// 예제 사용
const shinChan = new ShinChan();
shinChan.dance();  // 신짱구가 춤을 춥니다. 🎵
shinChan.sing();   // 신짱구가 노래를 부릅니다. 🎤
shinChan.prank();  // 신짱구가 장난을 칩니다. 🤪