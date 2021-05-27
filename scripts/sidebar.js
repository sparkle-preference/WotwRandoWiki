$(document).ready(function() {
    function get_base_url() {
        const url = window.location;
        return url.protocol + "//" + url.host + "/" + url.pathname.split('/')[1];
    }

    function create_link(list, label, uri) {
        list.append("<li><a href='" + get_base_url() + '/' + uri + "'>" + label + "</a></li>");
    }

    const sidebar = $('.sidebar');
    const list = $('<ul style="list-style-type:none"></ul>');
    sidebar.append(list);
    create_link(list, 'Home',            'index.html');
    create_link(list, 'New features',    'html/new_features.html');
    create_link(list, 'Installation',    'html/installation.html');
    create_link(list, 'How to start',    'html/how_to_start.html');
    create_link(list, 'Seed generation', 'html/seed_generation.html');
    create_link(list, 'Logic groups',    'html/logic_groups.html');
    create_link(list, 'Settings',        'html/settings.html');
    create_link(list, 'Keybinds',        'html/keybinds.html');
    create_link(list, 'Tutorials',       'html/tutorials.html');
});
