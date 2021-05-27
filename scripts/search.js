$(document).ready(function() {
	function get_base_url() {
		const url = window.location;
		return url.protocol + "//" + url.host + "/" + url.pathname.split('/')[1];
	}

	function search(text) {
		const search_strings = text.split(' ').filter((str) => str.trim() !== "");
		const values = document.getElementById('values');
		for (let i = 0; i < values.children.length; ++i) {
			const child = values.children[i];
			const search_value = child.getAttribute('search');
			if (search_strings.every(v => search_value.includes(v))) {
			    child.style.visibility = 'visible';
				child.style.display = 'block';
			} else {
				child.style.visibility = 'collapse';
				child.style.display = 'none';
			}
		}
	}

	function create_link(values, label, link, search) {
		const list_entry = document.createElement('li');
		const anchor = document.createElement('a');
		const text = document.createTextNode(label);

		anchor.value = label;
		anchor.href = get_base_url() + '/' + link;
		list_entry.setAttribute('search', search);

		anchor.appendChild(text);
		list_entry.appendChild(anchor);
		values.append(list_entry);
	}

	const values = $('#values');
	create_link(values, 'Ability swap',						'tutorials/ability_swap.html',			'ability swap');
	create_link(values, 'Advanced Launch tech',				'tutorials/advanced_launch.html',		'advanced launch tech');
	create_link(values, 'Bash glide',						'tutorials/bash_glide.html',			'bash glide');
	create_link(values, 'Dash ramp',						'tutorials/dash_ramp.html',				'dash ramp');
	create_link(values, 'Feeding Grounds Skip',				'tutorials/feeding_grounds_skip.html',	'feeding grounds skip glitched');
	create_link(values, 'Glide jumps',						'tutorials/glide_jumps.html',			'glide jumps');
	create_link(values, 'Grenade jumps',					'tutorials/grenade_jumps.html',			'grenade jumps');
	create_link(values, 'Projectile redirection',			'tutorials/projectile_redirection.html','projectile redirection');
	create_link(values, 'Resetting aerial options',			'tutorials/reset_aerials.html',			'resetting aerial options');
	create_link(values, 'Sentry as a fire source',			'tutorials/sentry_as_fire_source.html', 'sentry as a fire source glitched');
	create_link(values, 'Sentry jumps',						'tutorials/sentry_jumps.html',			'sentry jumps glitched hammer sword');
	create_link(values, 'Slowdown',							'tutorials/slowdown.html',				'slowdown glitched');
	create_link(values, 'Sword pogo',						'tutorials/sword_pogo.html',			'sword pogo');
	create_link(values, 'Wall break',						'tutorials/wall_break.html',			'wall break glitched hammer shuriken');
	create_link(values, 'Weapon jumps',						'tutorials/weapon_jumps.html',			'weapon jumps hammer sword');
	create_link(values, 'Weapon movement',					'tutorials/weapon_movement.html',		'weapon movement');

	const search_bar = $('#search');
	const url_params = new URLSearchParams(window.location.search);
	const value = url_params.get('search');
	if (value !== "") {
		search_bar.val(value);
		search(value.toLowerCase());
	}

	search_bar.on('input', (e) => search(e.target.value.toLowerCase()));
});
