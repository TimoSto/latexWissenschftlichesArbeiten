
class MyShell {

    private _res1: HTMLIFrameElement;
    private _res2: HTMLIFrameElement;

    private _titleElement: HTMLElement;
    private _backBtn: HTMLElement;

    constructor() {
        document.addEventListener('DOMContentLoaded', ()=>{
           let urlFrag = new URLSearchParams(window.location.search).get('page');
           this._res1 = document.querySelector('#res_1');
           this._res2 = document.querySelector('#res_2');
           this._titleElement = document.querySelector('.mdc-top-app-bar__title');
            this._backBtn = document.querySelector('.mdc-top-app-bar button');
            this._backBtn.addEventListener('click', ()=>{
                this.NavBack();
            })

           this._res1.src = '/'+urlFrag;
        });
    }

    NavBack(){
        this._res2.parentElement.classList.remove('res_container--open')
        this._res2.parentElement.classList.add('res_container--close')
        this._res1.parentElement.classList.remove('res_container--close')
        this._res1.parentElement.classList.add('res_container--open')
        this._backBtn.style.display = 'none';
    }

    setTitle(title: string) {
        this._titleElement.innerText = title;
    }

    NavigateToType(type: string) {
        this._res1.parentElement.classList.remove('res_container--open')
        this._res1.parentElement.classList.add('res_container--close')
        this._res2.src = '/type/' + type;
        this._res2.parentElement.classList.add('res_container--open')
        this._backBtn.style.display = '';
    }

    NavigateToEntry(index: number) {
        this._res1.parentElement.classList.remove('res_container--open')
        this._res1.parentElement.classList.add('res_container--close')
        this._res2.src = '/entry/' + index;
        this._res2.parentElement.classList.add('res_container--open')
        this._backBtn.style.display = '';
    }
}

(<any>window).shell = new MyShell();