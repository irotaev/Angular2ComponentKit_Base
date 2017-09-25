# Angular2Components_Static
Additional Angular 2 (or higher) components. Static components like covers, paragraphs eth

<h2>Установка через npm</h2>
<code>npm install --save ng2_simply-component-kit@latest</code>

<br/>
<h2>Этапы установки</h2>

<h5>1. Прописать в <i>angular-cli.json</i> стили для иконок</h5>
<code>
  ...
  "styles": [    
        "../node_modules/material-design-icons/iconfont/material-icons.css"
      ],
  ...
</code>

<h5>2. Зарегистрировать модуль <i>SimplyComponentKitModule</i> в <i>@NgModule</i></h5>
<code>
  import { SimplyComponentKitModule } from 'ng2_simply-component-kit/module';
</code>

<h5>3. Прописать генератор стилей в файле scss проекта</h5
<code>@import "../node_modules/ng2_simply-component-kit/src/simply-component-kit.aggregator";</code>

<h5> Прописать тему meterial.io в файле scss проекта</h5
<code>@import "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css";</code>

<br/><br/>
<i>Подключение модулю будет оптимизировано</i>
