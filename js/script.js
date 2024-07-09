var linkToDescrArr = [];
var modal = null;
var background = null;
var close = null;
var linkEducation = null;
var linkExperience = null;
var linkReward = null;
var flagOpenModal = false;
var teacherDescription = null;
window.addEventListener('load', function () {
    hangOut();
    linkToDescrArr = document.querySelectorAll('.trainerItem a');
    modal = document.getElementById('divModal');
    background = document.getElementById('divBackgroundGrey');
    close=document.querySelector('#divFlex1>a');
    //console.log(linkToDescrArr+"item");
    for (let i = 0; i < linkToDescrArr.length;i++)
    {
        linkToDescrArr[i].addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = 'block';
            background.style.display = 'block';
            flagOpenModal = true;
            addEventLink();
            //return false;
        });
    }
    close.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'none';
        background.style.display = 'none';
        flagOpenModal = false;
    });

});
function addEventLink() {
    if (flagOpenModal == true)
    {
        teacherDescription = document.getElementById('teacherDescription');
        linkEducation = document.querySelector('#selectDescription a:nth-child(1)');;
        linkExperience = document.querySelector('#selectDescription a:nth-child(2)');;
        linkReward = document.querySelector('#selectDescription a:nth-child(3)');;
        /*alert(22);*/
        linkEducation.addEventListener('click', function (event) {
            event.preventDefault();
            teacherDescription.innerHTML = `
              <p>
                Сентябрь 1995 — Июнь 2000 <br>
                Санкт-Петербургский политехнический университет Петра Великого<br>
                Факультет: Компьютерных наук и технологий<br>
                Специальность: Математика и компьютерные науки<br>
                Форма обучения: Очная
            </p>
            <h4>Курсы и тренинги</h4>
            <p>
                Ноябрь 2020 — Февраль 2021
                Программа дополнительного образования «3D Моделирование»
                Место проведения: Институт дополнительного образования «Политех»
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sequi ut consequuntur id quo ab pariatur, voluptatum dicta culpa eius odit quibusdam quos aliquid voluptatibus non omnis praesentium illum facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vel voluptas aspernatur voluptatem consequuntur animi consectetur quidem similique error expedita natus odit illo harum! Nihil facilis consequuntur quod amet dignissimos.
            </p>
            `;
            
            setRedLink(linkEducation);
        });
        linkExperience.addEventListener('click', function (event) {
            event.preventDefault();
            teacherDescription.innerHTML = `
          
            <h4>Опыт работы</h4>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Inventore eveniet vero culpa, quia fugit consequatur accusamus.
               Delectus minima iure ipsum voluptates sit 
               facere alias repudiandae, eveniet odit dolorem illo dolores
            </p>
            `;
            setRedLink(linkExperience);
        });
        linkReward.addEventListener('click', function (event) {
            event.preventDefault();
            teacherDescription.innerHTML = `
          
            <h4>Награды</h4>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
               Inventore eveniet vero culpa, quia fugit consequatur accusamus.
               Delectus minima iure ipsum voluptates sit 
               facere alias repudiandae, eveniet odit dolorem illo dolores
            </p>
            `;
            setRedLink(linkReward);
        });

    }
}
function setRedLink(elem)
{
    linkEducation.classList.remove('selectRed');
    linkExperience.classList.remove('selectRed');
    linkReward.classList.remove('selectRed');
    elem.classList.add("selectRed");
}