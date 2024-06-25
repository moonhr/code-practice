const studentList = [
  "구하림",
  "김보미",
  "김수현",
  "김정수",
  "문혜림",
  "배성빈",
  "백지원",
  "송이현",
  "신지윤",
  "유으뜸",
  "유호영",
  "이연승",
  "이재영",
  "이종수",
  "임유진",
  "정호연",
  "조우식",
  "조자연",
  "최유진",
  "황재민"
];

const KDT_IaaS_Project_A_Team_Info = {
  A_TEAM : {
    number : 1,
    pm : "",
    members : []
  },
  B_TEAM : {
    number : 2,
    pm : "",
    members : []
  },
  C_TEAM : {
    number : 3,
    pm : "",
    members : []
  },
  D_TEAM : {
    number : 4,
    pm : "",
    members : []
  }
}

const teamKeys = Object.keys(KDT_IaaS_Project_A_Team_Info);

const getRandomStudent = () => {
  const randomIndex = Math.floor(Math.random() * studentList.length);
  return studentList.splice(randomIndex, 1)[0]; 
};

// 할당 로직
for (let i = 0; i < 20; i++) {
  const teamKey = teamKeys[i % teamKeys.length]; 
  const team = KDT_IaaS_Project_A_Team_Info[teamKey];
  
  if (i % 5 === 0) {
    team.pm = getRandomStudent();
  } else {
    team.members.push(getRandomStudent());
  }
}

console.log(KDT_IaaS_Project_A_Team_Info);