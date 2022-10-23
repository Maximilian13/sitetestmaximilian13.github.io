let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let btn = document.querySelector("#click")

btn.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали котика!")
        tg.MainButton.show()
    }
}

