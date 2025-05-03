<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Выбор тарифа</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background-color: #0d1117;
      color: white;
    }
    .page {
      display: none;
    }
    .tariff-card {
      border: 2px solid #444;
      padding: 15px;
      margin-bottom: 10px;
      cursor: pointer;
      border-radius: 8px;
      background-color: #161b22;
    }
    .tariff-card.selected {
      border-color: #58a6ff;
      background-color: #1f2937;
    }
    button {
      padding: 10px 15px;
      margin: 10px 5px 0 0;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    .btn-next {
      background-color: #58a6ff;
      color: white;
    }
    .btn-back {
      background-color: #444;
      color: white;
    }
    .btn-send {
      background-color: green;
      color: white;
    }
  </style>
</head>
<body>

  <!-- Страница 1 -->
  <div id="main" class="page" style="display: block;">
    <h2>Введите ваш возраст</h2>
    <input type="number" id="userAge" placeholder="Возраст" />
    <br />
    <button id="nextBtn" class="btn-next">Далее</button>
  </div>

  <!-- Страница 2 -->
  <div id="tariff" class="page">
    <h2>Выберите тариф</h2>
    <div class="tariff-card" data-tariff="Старт">Тариф "Старт"</div>
    <div class="tariff-card" data-tariff="Профи">Тариф "Профи"</div>
    <div class="tariff-card" data-tariff="VIP">Тариф "VIP"</div>
    <br />
    <button id="backBtn" class="btn-back">Назад</button>
    <button id="sendBtn" class="btn-send" disabled>Отправить</button>
  </div>

  <script src="script.js"></script>
</body>
</html>