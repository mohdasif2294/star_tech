
{/* <script src="bundle.min.js"></script> */}
import "./bundle.min.js"
var MultiSelect2=function(){const t={value:"data-value",disabled:"data-disabled",class:"class",type:"type",info:"data-info",action:"data-action"};class e{constructor(t,e={},s={}){return this._node=t instanceof HTMLElement?t:document.createElement(t),this._config={i18n:s},this._setAttributes(e),e.textContent&&this._setTextContent(e.textContent),this}get(){return this._node}append(t){return this._node.appendChild(t),this}addClass(t){return this._node.classList.add(t),this}removeClass(t){return this._node.classList.remove(t),this}toggleClass(t){return this._node.classList.toggle(t),this}addEventListener(t,e){return this._node.addEventListener(t,e),this}removeEventListener(t,e){return this._node.removeEventListener(t,e),this}setText(t){return this._setTextContent(t),this}getHeight(){return window.getComputedStyle(this._node).height}setTop(t){return this._node.style.top=`${t}px`,this}focus(){return this._node.focus(),this}_setTextContent(t){this._node.textContent=t}_setAttributes(e){for(const s in e)t[s]&&e[s]&&this._setAttribute(t[s],e[s])}_setAttribute(t,e){this._node.setAttribute(t,e)}}return class{constructor(t,s){this._config={...s},this._state={opened:!1},this._icons=[],this.currentFocus=-1,this._boundHandleClick=this._handleClick.bind(this),this._boundUnselectOption=this._unselectOption.bind(this),this._boundSortOptions=this._sortOptions.bind(this),this._boundArrows=this._arrows.bind(this),this._body=new e(document.body),this._create(t),this._setValue()}_create(t){const s="string"==typeof t?document.querySelector(t):t;this._parent=new e(s),this._select=new e("div",{class:"multi-select__select"}),this._selected_value=new e("span",{class:"multi-select__label"}),this._optionsDiv=new e("div",{class:"multi-select__options"}),this._select.append(this._selected_value.get()),this._select.append(this._optionsDiv.get()),this._parent.append(this._select.get()),this._options=this._generateOptionsOfSelect(),this._select.addEventListener("click",this._boundHandleClick),this._config.multiple&&this._select.addClass("multi-select__select--multiple")}_generateOptionsOfSelect(){return this._config.autocomplete&&(this._autocomplete=new e("input",{class:"multi-select__autocomplete",type:"text"}),this._autocomplete.addEventListener("input",this._boundSortOptions),this._autocomplete.addEventListener("keydown",this._boundArrows),this._optionsDiv.append(this._autocomplete.get())),this._config.options.map(t=>{const s=new e("div",{class:"multi-select__option",value:t.value,textContent:t.label,disabled:t.disabled,info:t.info,action:t.action});return this._optionsDiv.append(s.get()),s})}_handleClick(t){if(this._firstActive(),t.stopPropagation(),this._closeAllLists(),"multi-select__autocomplete"!==t.target.className){if(this._state.opened){const e=this._options.find(e=>e.get()===t.target);return e&&this._setValue(e.get().getAttribute("data-value"),!0),this._select.removeClass("multi-select__select--opened"),this._body.removeEventListener("click",this._boundHandleClick),this._select.addEventListener("click",this._boundHandleClick),void(this._state.opened=!1)}"fa "+t.target.parentElement.classList[1]!==this._config.icon?"I"!==t.target.tagName&&"svg"!==t.target.tagName?(this._select.addClass("multi-select__select--opened"),this._body.addEventListener("click",this._boundHandleClick),this._select.removeEventListener("click",this._boundHandleClick),this._state.opened=!0,this._autocomplete&&this._autocomplete.focus()):this._unselectOption(t.target.getAttribute("data-value")):this._unselectOption(t.target.parentElement.getAttribute("data-value"))}}_setValue(t,e,s){if(t&&!s&&(this._config.value=this._config.multiple?this._config.value.concat(t):t),t&&s&&(this._config.value=t),this._options.forEach(t=>{t.removeClass("multi-select__option--selected")}),this._config.multiple){const t=this._config.value.map(t=>{const e=this._config.options.find(e=>e.value===t);return this._options.find(t=>t.get().getAttribute("data-value")===e.value.toString()).addClass("multi-select__option--selected"),e});return void this._selectOptions(t,e)}if(!this._config.options.length)return;const i=this._config.value?this._config.options.find(t=>t.value.toString()===this._config.value):"";if(""!==i){this._options.find(t=>t.get().getAttribute("data-value")===i.value.toString()).addClass("multi-select__option--selected"),this._selectOption(i,e)}}_selectOption(t,e){this._selectedOption=t,this._selected_value.setText(t.label),this._config.onChange&&e&&this._config.onChange(t.value)}_selectOptions(t,s){this._selected_value.setText(""),this._icons=t.map(t=>{const s=new e("span",{class:"multi-select__selected-label",textContent:t.label}),i=new e("i",{class:this._config.icon,value:t.value});return s.append(i.get()),this._selected_value.append(s.get()),i.get()}),s&&this._optionsDiv.setTop(Number(this._select.getHeight().split("px")[0])+5),this._config.onChange&&s&&this._config.onChange(this._config.value)}_unselectOption(t){const e=[...this._config.value];let s;-1!==(s=t.target?e.indexOf(t.target.getAttribute("data-value")):e.indexOf(t))&&e.splice(s,1),this._setValue(e,!0,!0)}_sortOptions(t){this._options.forEach(e=>{e.get().textContent.toLowerCase().includes(t.target.value.toLowerCase())?e.removeClass("multi-select__option--hidden"):e.addClass("multi-select__option--hidden")}),this._firstActive()}_visibleOptions(){return this._optionsDiv.get().querySelectorAll("div.multi-select__option:not(.multi-select__option--hidden)")}_unselectedOptions(){return this._optionsDiv.get().querySelectorAll("div.multi-select__option:not(.multi-select__option--selected):not(.multi-select__option--hidden)")}_selectedOptions(){return this._optionsDiv.get().querySelectorAll(".multi-select__option--selected")}_arrows(t){let e=this._visibleOptions();40==t.keyCode?(this._nextUnselected(e),this._addActive(e)):38==t.keyCode?(this._previousUnselected(e),this._addActive(e)):13!=t.keyCode&&9!=t.keyCode||(t.preventDefault(),this.currentFocus>-1&&(e&&e[this.currentFocus].click(),this._removeActive(e)))}_addActive(t){if(!t)return!1;this._removeActive(t),this._listEndingCheck(t),t[this.currentFocus].classList.add("multi-select__option-active"),t[this.currentFocus].scrollIntoView()}_removeActive(t){for(var e=0;e<t.length;e++)t[e].classList.remove("multi-select__option-active")}_nextUnselected(t){for(this.currentFocus++;t[this.currentFocus]&&t[this.currentFocus].classList.contains("multi-select__option--selected");)this.currentFocus++}_previousUnselected(t){for(this.currentFocus--;t[this.currentFocus]&&t[this.currentFocus].classList.contains("multi-select__option--selected");)this.currentFocus--}_listEndingCheck(t){this.currentFocus>=t.length&&(this.currentFocus=-1,this._nextUnselected(t)),this.currentFocus<0&&(this.currentFocus=t.length,this._previousUnselected(t))}_firstActive(){this.currentFocus=-1,this._removeActive(this._visibleOptions()),this._config.autocomplete&&this._unselectedOptions().length>0&&(this._nextUnselected(this._visibleOptions()),this._visibleOptions()[this.currentFocus].classList.add("multi-select__option-active"))}_closeAllLists(){let t=document.getElementsByClassName("multi-select__select");for(let e=0;e<t.length;e++)t[e]!==this._select.get()&&t[e].classList.contains("multi-select__select--opened")&&t[e].classList.remove("multi-select__select--opened")}}}();
  var single = new MultiSelect2(".single-select", {
    options: [
	{
        label: "Shirts",
        value: "Shirts"
      },
      {
        label: "Jeans",
        value: "Jeans"
      },
      {
        label: "Tshirts",
        value: "Tshirts"
      },
      {
        label: "Shoes",
        value: "Shoes"
      },    	
    ],
    autocomplete: true,
    onChange: value => {
    },
  });
  console.log(single);
  var autocomplete = new MultiSelect2(".autocomplete-select", {
      options: [
      	{
        label: "Levis",
        value: "Levis"
      },
      {
        label: "Nike",
        value: "Nike"
      },
      {
        label: "Roadster",
        value: "Roadster"
      },
      {
        label: "Hrx",
        value: "Hrx"
      },
      ],
      value: [],
      multiple: true,
      autocomplete: true,
      icon: "fa fa-times",
      onChange: value => {
        console.log(value);
      },
  });
