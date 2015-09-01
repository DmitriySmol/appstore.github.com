var myModule = (function () {


//Инициализирует наш модуль
	var init = function () {
		_SetUpListners();
	};

	var _SetUpListners = function () {
		_MoveSlider(); //прокручиваем слайдер вперед, назад
		_ChooseSlide();//меняем главную картинку слайда
		_ToUp();
		_columns(); //Кнопка наверх;
	};	


		//по клику листаем картинки вперед и назад
		var _MoveSlider = function(){
			

			$('.button').on('click', function(event) {
				event.preventDefault();
				//переменные
				var
					$this = $(this),
					container = $this.closest('.slider'),
					list = container.find('.main__slider-sliding-pictures'),
					items = container.find('.slider__iphone-png'),
					activeSlide = items.filter('.active'),
					nextSlide = activeSlide.next(),
					prevSlide = activeSlide.prev(),
					prevSlideS = activeSlide.prevAll()

				if ($(this).hasClass('slider__next-button')) {
							
					nextSlide.addClass('active').siblings().removeClass('active');
					prevSlideS.addClass('invisible')			
					console.log(' кто-то нажал next-button')

				} else {

					prevSlide.addClass('active').siblings().removeClass('active');
					prevSlide.removeClass('invisible')
					console.log(' кто-то нажал prev-button')
				}

			});

		};

		//меняем главную картинку слайда
		var _ChooseSlide = function(){

			$('.main__slider-sliding-pictures-links').on('click', function(event){
				event.preventDefault();

				var 
					$this = $(this),
					container = $this.closest('.slider'),
					path = $this.find('img').attr('src');
					item = $this.closest('li');
				//главный слайд
				if (!item.hasClass('show')) {

					item.addClass('show').siblings().removeClass('show');

					container.find('.slider__wrapper-main-pic img').fadeOut(function(){
						$(this).attr('src', path).fadeIn();
					});
				};
			});		
		};

		//Кнопка наверх
		var _ToUp = function() {
			
			var 
				$this = $(this),
				$window = $(window),
				upCaption = $('.scroll'),
				scrollHeight = 300

				// скролл кнопки по клику
				upCaption.on('click', function(){
				upCaption.animate({scrollTop: 0}, 300);
				});

				//спрятать кнопку при загрузке страницы
				if ($window.scrollTop() <= scrollHeight ) {
						upCaption.fadeOut()
					}else{
						upCaption.fadeIn('fast')
				};

				//спрятать кнопку по скролу < 300
				$window.scroll(function () {
					if ($window.scrollTop() <= scrollHeight ) {
						upCaption.fadeOut('fast')
					}else{
						upCaption.fadeIn('fast')
					};
				});
							
		};

		var _columns = function() {
			
			if ($('.about-shop__columns').length) {
				
				$('.about-shop__columns').columnize({
					width: 150,
					columns: 3
				});

				}

			
		}

	return {
		init: init
	};


})();

myModule.init();