function changeElemVisibility(button_id, element_id, classNameActive){
    try {
        const btn = document.querySelector(button_id);
        const elem = document.querySelector(element_id);

        btn.classList.toggle(classNameActive)
        elem.classList.toggle('elemUnset')
    } catch {
        console.error('[ChangeVisibility] Какой-то из элементов не найден!');
    }
}
try {
    videojs(document.querySelector('.video-js'), {
        language: 'ru'
    });
} catch {
}
