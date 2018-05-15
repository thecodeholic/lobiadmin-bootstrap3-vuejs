<template>
  <div class="menu">
    <div class="menu-heading">
      <div class="menu-header-buttons-wrapper clearfix">
        <button type="button" class="btn btn-info btn-menu-header-collapse">
          <i class="fa fa-cogs"></i>
        </button>
        <!--Put your favourite pages here-->
        <div class="menu-header-buttons">
          <a href="#profile" class="btn btn-info btn-outline" data-title="Profile">
            <!--<icon name="user"></icon>-->
          </a>
          <a href="#invoice" class="btn btn-info btn-outline" data-title="Invoice">
            <!--<icon name="file-pdf"></icon>-->
          </a>
          <a href="#lobimail" class="btn btn-info btn-outline" data-title="Inbox">
            <!--<i class="fa fa-envelope"></i>-->
            <!--<icon name="file-envelope"></icon>-->
          </a>
          <a href="#calendar" class="btn btn-info btn-outline" data-title="Calendar">
            <!--<icon name="file-calendar"></icon>-->
          </a>
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <router-link to="dashboard" tag="li" active-class="active">
          <a>
            <i class="fa fa-home menu-item-icon"></i>
            <span class="inner-text">Dashboard</span>
          </a>
        </router-link>
        <li>
          <a href="#">
            <i class="fa fa-share-alt menu-item-icon"></i>
            <span class="inner-text">Exclusive plugins</span>
            <span class="badge-wrapper"><span class="badge badge-xs badge-cyan">4</span></span>
          </a>
          <ul>
            <li>
              <a href="#lobipanel">
                <span class="inner-text">LobiPanel</span>
              </a>
            </li>
            <li>
              <a href="#lobibox">
                <span class="inner-text">LobiBox</span>
              </a>
            </li>
            <li>
              <a href="#lobitab">
                <span class="inner-text">LobiTab</span>
              </a>
            </li>
            <li>
              <a href="#lobilist">
                <span class="inner-text">LobiList</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-area-chart menu-item-icon"></i>
            <span class="inner-text">Graphs</span>
          </a>
          <ul>
            <li>
              <a href="#chartjs">
                <span class="inner-text">Chart.js</span>
              </a>
            </li>
            <li>
              <a href="#morrisjs">
                <span class="inner-text">Morris Charts</span>
              </a>
            </li>
            <li>
              <a href="#inline-charts">
                <span class="inner-text">Inline Charts</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-table menu-item-icon"></i>
            <span class="inner-text">Tables</span>
          </a>
          <ul>
            <li>
              <a href="#basic-tables">
                <span class="inner-text">Basic Tables</span>
              </a>
            </li>
            <li>
              <a href="#data-tables">
                <span class="inner-text">Data Tables</span>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-list-alt menu-item-icon"></i>
            <span class="inner-text">UI Elements</span>
          </a>
          <ul>
            <li>
              <a href="#default-elements">
                Default Elements
              </a>
            </li>
            <li>
              <a href="#">
                <span class="inner-text">Icons</span>
              </a>
              <ul>
                <li>
                  <a href="#glyphicon">
                    <i class="glyphicon glyphicon-cloud-download"></i>
                    <span class="inner-text">Glyphicon</span>
                  </a>
                </li>
                <li>
                  <a href="#font-awesome">
                    <i class="fa fa-flag menu-item-icon"></i>
                    <span class="inner-text">Font Awesome</span>
                  </a>
                </li>
                <li>
                  <a href="#weather-icons">
                    <i class="wi wi-cloudy menu-item-icon"></i>
                    <span class="inner-text">Weather icons</span>
                  </a>
                </li>
              </ul>

            </li>
            <li>
              <a href="#typography">
                Typography
              </a>
            </li>
            <li>
              <a href="#buttons">
                Buttons
              </a>
            </li>
            <li>
              <a href="#tiles">
                Tiles
              </a>
            </li>
            <li>
              <a href="#discount-labels">
                Discount labels
              </a>
            </li>
            <li>
              <a href="#treeview">
                Treeview
              </a>
            </li>
            <li>
              <a href="#">
                Six Level Menu
              </a>
              <ul>
                <li>
                  <a href="#">
                    Third level menu
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        Fourth level
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Fifth level
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Fifth level
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>

                    </li>
                    <li>
                      <a href="#">
                        Fourth level
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Fifth level
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Fifth level
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                </li>
                <li>
                  <a href="#">
                    Third level menu
                  </a>
                  <ul>
                    <li>
                      <a href="#">
                        Fourth level
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Fifth level
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Fifth level
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        Fourth level
                      </a>
                      <ul>
                        <li>
                          <a href="#">
                            Fifth level
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Fifth level
                          </a>
                          <ul>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Sixth level
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>

                </li>
              </ul>

            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-pencil-square-o menu-item-icon"></i>
            <span class="inner-text">Forms</span>
          </a>
          <ul>
            <li>
              <a href="#form-basic-elements">
                Basic Elements
              </a>
            </li>
            <li>
              <a href="#form-custom-elements">
                Custom Elements
              </a>
            </li>
            <li>
              <a href="#form-plugins">
                Form Plugins
              </a>
            </li>
            <li>
              <a href="#form-layouts">
                Form Layouts
              </a>
            </li>
            <li>
              <a href="#form-validation">
                Form Validation
              </a>
            </li>
            <li>
              <a href="#wizard">
                Wizards
              </a>
            </li>
            <li>
              <a href="#editor">
                WYSIWYG Editor
              </a>
            </li>
            <li>
              <a href="#file-upload">
                File Upload
              </a>
            </li>
            <li>
              <a href="#image-cropping">
                Image cropping
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#grid">
            <i class="fa fa-laptop menu-item-icon"></i>
            <span class="inner-text">Grid options</span>
          </a>
        </li>
        <li>
          <a href="#mail-templates">
            <i class="fa fa-envelope-o menu-item-icon"></i>
            <span class="inner-text">Mail templates</span>
          </a>
        </li>
        <router-link to="calendar" tag="li" active-class="active">
          <a>
            <i class="fa fa-calendar menu-item-icon"></i>
            <span class="inner-text">Calendar</span>
            <span class="badge-wrapper"><span class="badge badge-xs badge-info">12</span></span>
          </a>
        </router-link>
        <li>
          <a href="#lobimail">
            <i class="fa fa-envelope menu-item-icon"></i>
            <span class="inner-text">Inbox</span>
            <span class="badge-wrapper"><span class="badge badge-xs badge-danger">7</span></span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-file-o menu-item-icon"></i>
            <span class="inner-text">Extra</span>
          </a>
          <ul>
            <li>
              <a href="#error-404">
                Page 404
              </a>
            </li>
            <li>
              <a href="#error-500">
                Page 500
              </a>
            </li>
            <li>
              <a href="lock.html">
                Lock Screen
              </a>
            </li>
            <li>
              <a href="login.html">
                Login & Register
              </a>
            </li>
            <li>
              <a href="#helper">
                Helper Classes
              </a>
            </li>
            <li>
              <a href="#pricing-tables">
                Pricing tables
              </a>
            </li>
            <li>
              <a href="#timeline">
                Timeline
              </a>
            </li>
            <li>
              <a href="#invoice">
                Invoice
              </a>
            </li>
            <li>
              <a href="#profile">
                Profile
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <div class="menu-collapse-line">
      <!--Menu collapse/expand icon is put and control from LobiAdmin.js file-->
      <div class="menu-toggle-btn" data-action="collapse-expand-sidebar"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation"
  }
</script>

<style lang="scss" scoped>

</style>
