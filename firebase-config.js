/* ============================================================
   ★ 교회 Firebase 설정 (Bon PJ 프로젝트) ★
   이 앱은 Realtime Database 만 쓰므로 databaseURL 만 있으면 됩니다.
   (apiKey / appId 등 웹앱 등록 값은 필요 없어요)

   ⚠️ 실시간 제출이 되려면 Firebase 콘솔의
      Realtime Database → 규칙(Rules) 이 열려 있고 "게시(Publish)" 돼 있어야 합니다.
============================================================ */
window.FIREBASE_CONFIG = {
  databaseURL: "https://bon-pj-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "bon-pj",
  authDomain: "bon-pj.firebaseapp.com"
};
