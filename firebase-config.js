/* ============================================================
   ★ 교회 Firebase 설정 — 여기 한 곳만 채우면 콘솔·폰 둘 다 적용돼요 ★

   넣는 법:
   1) https://console.firebase.google.com 에서 프로젝트 만들기
   2) Realtime Database 켜기(테스트 모드) → ⚠️ 행사 1~2일 전에! (30일 후 자동 잠김)
   3) 프로젝트 설정 → '내 앱'(웹) → firebaseConfig 값을 아래 "여기에-붙여넣기" 자리에 복사
   ※ databaseURL 이 반드시 있어야 해요 (예: https://내프로젝트-default-rtdb.firebasedatabase.app)
============================================================ */
window.FIREBASE_CONFIG = {
  apiKey: "여기에-붙여넣기",
  authDomain: "여기에-붙여넣기",
  databaseURL: "여기에-붙여넣기",
  projectId: "여기에-붙여넣기",
  appId: "여기에-붙여넣기"
};
