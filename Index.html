<?php



// Установить соединение с базой данных
$connection = mysqli_connect("localhost", "localhost", "&Oje2QS&", "alexloxz_bd");

// Проверить соединение
if (!$connection) {
    die("Ошибка соединения: " . mysqli_connect_error());
}




// Прайс тренера
$results1 = mysqli_query($connection, "SELECT CONCAT(Trenera.Im,' ', Trenera.Oth, ' (',Vozrasta.Vozrast,')')AS Trener_Name, Prais_Trening.1_Tren, Prais_Trening.4_Tren, Prais_Trening.8_Tren, Prais_Trening.12_Tren
FROM Prais_Trening
INNER JOIN Trenera ON Prais_Trening.Kod_Trenera = Trenera.Kod_Trenera
INNER JOIN Vozrasta ON Prais_Trening.Kod_Vozrasta = Vozrasta.Kod_Vozrasta;");
// Проверить наличие ошибок
if (!$results1) {
    die("Ошибка запроса: " . mysqli_error($connection));
}
//Сохраняем информацию запроса
$tabl1 = array(); while ($row = mysqli_fetch_assoc($results1)) { $tabl1[] = $row; }





// Прайс без тренеров
$results2 = mysqli_query($connection, "SELECT Prais_Zala, Vzroslie, Deti
FROM Prais_Zal
ORDER BY `Prais_Zal`.`Vzroslie` ASC;");
// Проверить наличие ошибок
if (!$results2) {
    die("Ошибка запроса: " . mysqli_error($connection));
}
//Сохраняем информацию запроса
$tabl2 = array(); while ($row = mysqli_fetch_assoc($results2)) { $tabl2[] = $row; }




// Прайс поверлифтинг
$results3 = mysqli_query($connection, "SELECT CONCAT(t.Im, ' ', t.Oth) AS Trener_Name, pp.`8_Tren`, pp.`12_Tren`, pp.`16_Tren`
FROM Prais_Poverl pp
INNER JOIN Trenera t ON pp.Kod_Trenera = t.Kod_Trenera;");
// Проверить наличие ошибок
if (!$results3) {
    die("Ошибка запроса: " . mysqli_error($connection));
}
//Сохраняем информацию запроса
$tabl3 = array(); while ($row = mysqli_fetch_assoc($results3)) { $tabl3[] = $row; }




// Тренер инфо Виталий
$results4 = mysqli_query($connection, "SELECT CONCAT(Im, ' ', Oth) AS Name_Other, Info, ssilki AS link, Foto 
FROM Trenera 
LIMIT 1;");
// Проверить наличие ошибок
if (!$results4) {
    die("Ошибка запроса: " . mysqli_error($connection));
}
//Сохраняем информацию запроса
$Vital = array(); while ($row = mysqli_fetch_assoc($results4)) { $Vital[] = $row; }




// Тренер инфо без Виталия
$results5 = mysqli_query($connection, "SELECT CONCAT(Im, ' ', Oth) AS Name_Other, Info, ssilki AS link, Foto 
FROM Trenera 
LIMIT 18446744073709551615 OFFSET 1;");
// Проверить наличие ошибок
if (!$results5) {
    die("Ошибка запроса: " . mysqli_error($connection));
}
//Сохраняем информацию запроса
$Trenera = array(); while ($row = mysqli_fetch_assoc($results5)) { $Trenera[] = $row; }




// Фтото шапки
$results6 = mysqli_query($connection, "SELECT * FROM Kartinki
ORDER BY Kod_Kartinki
LIMIT 1;");
// Проверить наличие ошибок
if (!$results6) {
    die("Ошибка запроса: " . mysqli_error($connection));
}
//Сохраняем информацию запроса
$FotoHapka = array(); while ($row = mysqli_fetch_assoc($results6)) { $FotoHapka[] = $row; }






// Фтото Зала
$results8 = mysqli_query($connection, "SELECT * FROM Kartinki
ORDER BY Kod_Kartinki
LIMIT 30 OFFSET 1;");
// Проверить наличие ошибок
if (!$results8) {
    die("Ошибка запроса: " . mysqli_error($connection));
}
//Сохраняем информацию запроса
$FotoZala = array(); while ($row = mysqli_fetch_assoc($results8)) { $FotoZala[] = $row; }








// Таблица время работы
$results9 = mysqli_query($connection, "SELECT * FROM `Vremia_Raboti` WHERE 1");
// Проверить наличие ошибок
if (!$results9) {
    die("Ошибка запроса: " . mysqli_error($connection));
}
//Сохраняем информацию запроса
$VremiaRaboti = array(); while ($row = mysqli_fetch_assoc($results9)) { $VremiaRaboti[] = $row; }






















// Закрыть соединение
mysqli_close($connection);
?>







<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Спортивный зал "MUKHIN TWINS"</title>
    <!-- Bootstrap -->
    <link href="css/bootstrap-4.4.1.css" rel="stylesheet">
	<link rel="stylesheet" href="dase.php">
	<link rel="stylesheet" href="map.js">
  </head>
<body class="body"> 
	<!-- Верхняя инфа и телефон с адресом -->
	<section id="zero">
		<div class="capMain">
			<div class="cap">
				<div class="capName" id="name"><b>Спортивный зал "MUKHIN TWINS"</b></div>
				 <div class="capInf">
					<div class="plase"><img src="images/Иконка местоположения.png" width="20px" height="20px" alt=""><a href="https://yandex.ru/maps/org/mukhintwins/200223651160/?from=api-maps&ll=39.755122%2C57.688712&origin=jsapi21&z=17.12">Ярославль ул. Волгоградская д.61 Ярославль</a></div>
					<div class="phone"> <img src="images/Иконка телефона.png" width="20px" height="20px" alt=""> +7(902)633-63-76</div>
				</div>
			</div>
		</div>
			<div class="NavPanel">
				<div class="navigation"><a href="#two">Наши направления</a></div>
				<div class="navigation"><a href="#four">Команда тренеров</a></div>
				<div class="navigation"><a href="#prais1">Прайсы</a></div>
				<div class="navigation"><a href="#five">Расписание</a></div>
				<div class="navigation"><a href="#photos">Фото зала</a></div>
			</div>
	</section>
	<section id="one">
		<?php foreach ($FotoHapka as $data):?>                <!-- открытие пшп кода --> 
			<div class="top">
				<img  src="<?= $data['Kartinka']; ?>" width="100%" height="100%" alt="">
			</div>
		<?php endforeach; ?>                              <!-- закрытие пшп кода --> 
	</section>
<!-- Информация о зале -->
<h2>Наши направления:</h2>
	<section id="two">
		<div>
			<lu class="text">"Mukhin Twins" - спортивный зал с характером: 
				<li class="text">Пауэрлифтинг</li>
				<li class="text">ОФП дети</li>
				<li class="text">Фитнес</li>
				<li class="text">Персональный тренинг</li>
			</lu>
		</div>	
	</section>

	<!-- Тренера -->
	<h2>Команда тренеров:</h2>
	<!--Виталий-->
	<section id="four">

		<div class="card-mainTreiner">
			<div class="mainTreiner">
				<?php foreach ($Vital as $data):?>                <!-- открытие пшп кода --> 

					<a href="<?= $data['link']; ?>"><img src="<?= $data['Foto']; ?>" alt=""></a>
						<div class="inf">
						<h3 class="textLightVit"><a href="<?= $data['link']; ?>"><?= $data['Name_Other']; ?></a></h3 >
						<p id="txt"><?= $data['Info']; ?></p>
					</div>	

				<?php endforeach; ?>                              <!-- закрытие пшп кода --> 
			</div>
		</div>
	</section>

	<!--Тренера-->
	<section id="three">

		<div class="cards-trainer">
			<?php foreach ($Trenera as $data):?>                <!-- открытие пшп кода --> 

				<div class="trainer">
				<a href="<?= $data['link']; ?>"><img src="<?= $data['Foto']; ?>" alt=""></a>
					<h3 class="textLight"><a href="<?= $data['link']; ?>"><?= $data['Name_Other']; ?></a></h3>
					<p><?= $data['Info']; ?></p>
				</div>

			<?php endforeach; ?>                              <!-- закрытие пшп кода --> 
		</div>
	</section>


		<!-- Прайс-->
		<h2>Прайсы:</h2>
	<section id="prais1">
		<div class="prais1">
			<h4>Тренажёрный зал:</h4> <br>
			<table class="firstTb">
				<tr>
					<th>Виды</th>
					<th>Взрослые стоимость</th>
					<th>Дети стоимость(до 18)</th>
				</tr>

				<?php foreach ($tabl2 as $data):?>                <!-- открытие пшп кода -->
				<tr>
					<th><?= $data['Prais_Zala']; ?></th>
					<th><?= $data['Vzroslie']; ?></th>
					<th><?= $data['Deti']; ?></th>
				</tr>
				<?php endforeach; ?>                              <!-- закрытие пшп кода --> 

			</table>
		</div>
	</section>
	<section id="prais2">
		<div class="prais2">
			<h4>Персональный тренинг:</h4><br>
			<table class="firstTb">
				<tr>
					<th>Тренер</th>
					<th>Разовая тренировка</th>
					<th>Абонемент на 4 тренировки</th>
					<th>Абонемент на 8 тренировок</th>
					<th>Абонемент на 12 тренировок</th>
				</tr>
				<?php foreach ($tabl1 as $data):?>                <!-- открытие пшп кода -->
					
				<tr>
					<th><?= $data['Trener_Name']; ?></th>
					<th><?= $data['1_Tren']; ?></th>
					<th><?= $data['4_Tren']; ?></th>
					<th><?= $data['8_Tren']; ?></th>
					<th><?= $data['12_Tren']; ?></th>
				</tr>

				<?php endforeach; ?>                              <!-- закрытие пшп кода --> 
			</table>
		</div>
	</section>
	<section id="prais3">
		<div class="prais3">
		<h4>Пауэрлифтинг:</h4> <br>
			<table class="firstTb">
				<tr>
					<th>Тренер</th>
					<th>Абонемент на 8 тренировок</th>
					<th>Абонемент на 12 тренировкок</th>
					<th>Абонемент на 16 тренировкок</th>
				</tr>
				<?php foreach ($tabl3 as $data):?>                <!-- открытие пшп кода -->

				<tr>
					<th><?= $data['Trener_Name']; ?></th>
					<th><?= $data['8_Tren']; ?></th>
					<th><?= $data['12_Tren']; ?></th>
					<th><?= $data['16_Tren']; ?></th>
				</tr>

				<?php endforeach; ?>                              <!-- закрытие пшп кода --> 
			</table>
		</div>
	</section>
	<!-- Расписание -->
		<h2>Расписание:</h2>
	<section id="five">	
		<div class="PraisAndWorkTime">
			<table class="firstTb">
				<tr>
					<th>День недели</th>
					<th>Время</th>
				</tr>
				<?php foreach ($VremiaRaboti as $data):?>                <!-- открытие пшп кода --> 

					<tr>
						<th><?= $data['Den_Nedeli']; ?></th>
						<th><?= $data['Vremia_Raboti']; ?></th>
					</tr>


				<?php endforeach; ?>                              <!-- закрытие пшп кода --> 
			</table>
		</div>
	</section>

	<!-- Фото зала -->
	<section id="photos">
	<h2 id="black">Наш зал:</h2>
		<div class="slider-container">
        <div class="slider">
			<?php foreach ($FotoZala as $data):?>                <!-- открытие пшп кода --> 
          		<img src="<?= $data['Kartinka']; ?>" alt="">
			<?php endforeach; ?>                              <!-- закрытие пшп кода --> 
        </div>
        <button class="prev-button" aria-label="Посмотреть предыдущий слайд">&lt;</button>
        <button class="next-button" aria-label="Посмотреть следующий слайд">&gt</button>
      </div>
	</section>
		<!-- карта -->
			<h2>Мы на карте Ярославля:</h2>
		<section id="six">
			<div class="map" id="map">
				<script src="https://api-maps.yandex.ru/2.1/?apikey=ваш API-ключ&lang=ru_RU">
				</script>
				<script src="map.js"></script>
				</script>
			</div>
		</section>
		<section id="under">
			<div class="infAlign">
			 <div class="underText"><p><b>Спортивный зал <br> "MUKHIN TWINS"</b></p></div>
			  <div class="vkAlign">
			 	 <div class="vk"><a href="https://vk.com/mukhintwins">Наша группа в Вк</a></div>
			 	</div>	
			</div>
		</section>

		<script src="buttons.js"></script>
  </body>
</html>
