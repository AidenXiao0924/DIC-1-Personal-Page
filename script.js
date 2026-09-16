// 姓名集中放在 index.html 的 body 標籤上，方便初學者修改。
const PROFILE_NAME = document.body.dataset.profileName || "請填入姓名";

const nameElements = document.querySelectorAll("[data-profile-name]");
const timeElement = document.querySelector("#current-time");
const dateElement = document.querySelector("#current-date");
const timezoneElement = document.querySelector("#timezone-label");
const accessibleTimeElement = document.querySelector("#accessible-time");
const yearElement = document.querySelector("#current-year");
const descriptionElement = document.querySelector('meta[name="description"]');

document.title = `${PROFILE_NAME}｜個人首頁`;
descriptionElement.content = `${PROFILE_NAME}的個人課程作業首頁，顯示瀏覽器本地日期與時間。`;

nameElements.forEach((element) => {
  element.textContent = PROFILE_NAME;
});

const timeFormatter = new Intl.DateTimeFormat("zh-Hant", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

const dateFormatter = new Intl.DateTimeFormat("zh-Hant", {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
});

const spokenTimeFormatter = new Intl.DateTimeFormat("zh-Hant", {
  dateStyle: "full",
  timeStyle: "medium",
});

function updateClock() {
  const now = new Date();
  timeElement.textContent = timeFormatter.format(now);
  timeElement.dateTime = now.toISOString();
  dateElement.textContent = dateFormatter.format(now);

  // 螢幕閱讀器每分鐘收到一次完整時間，避免每秒打斷使用者。
  if (now.getSeconds() === 0 || !accessibleTimeElement.textContent) {
    accessibleTimeElement.textContent = `目前本地時間：${spokenTimeFormatter.format(now)}`;
  }
}

const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
timezoneElement.textContent = localTimezone || "瀏覽器本地時區";
yearElement.textContent = new Date().getFullYear();

updateClock();
window.setInterval(updateClock, 1000);
