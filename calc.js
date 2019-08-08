/*
* Orientation Informatique
 * Calculatrice en Javascript.
 *
 * Atelier 1  Calculatrice 02 Aout 2019
 */
//================================== Définition des variables. ======================================

var nb1 = 0, nb2 = 0;
/* Operation type. */
var op = 'null';
var cpt = 0;
//============================== Ajouter un nombre a 'l'ecran.===================================
function ajouteChiffre(form,val)
{
	form.texte.value += val;
}
//============== Teste si une point a déjà été ajoutée ou non. =========================
function ajoutePoint(form)
{
	if (form.texte.value.length == 0)
	{
		form.texte.value = "0.";
	}
	else 
	{
		var j = 0;
		for (var i=0;i<form.texte.value.length;i++)
		{
			if (form.texte.value.charAt(i) == ".")
			{
				j = 1;
				break;
			}
		}
		(j == 0) ? (form.texte.value += ".") : (alert("D\351j\340 entr\351."));
	} 
}
//============================== Definition du type d'operation ========================================
function setOp(opType)
{
	if (op == 'null')
	{
		op = opType;
	}
	else
	{
		alert("Vous \352tes d\351j\340 en train de faire une " + op + ".");
		form.texte.value = "";
	}
}
//===================================== Reinitialiser les champ. ===============================================
function raz(form)
{
	form.texte.value = "";
	form.affichage.value = "";
	nb1 = 0, nb2 = 0;
	op = 'null';
	cpt = 0;
}
//=============================== Stocker les variable. ===========================================
function store(form)
{
	if ((form.texte.value != "") && (op == 'null') && (cpt == 0)) // op est défini après le premier stockage var
	{
		nb1 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	else if ((form.texte.value != "") && (op != 'null') && (cpt == 1))
	{
		nb2 = form.texte.value;
		form.texte.value = "";
		cpt++;
	}
	/* else: ne rien faire. */
}
/*
 *
* Solution de contournement pour comportement indésirable: lors de la saisie de la première variable et d'un clic égal, la var sera stockée.
 */
function storeEq(form)
{
	if (cpt == 1)
	{
		store(form);
	}
}
//================================== Calculate. ===============================================
function calc(form)
{
	/* Interrompez si l'utilisateur a cliqué sur le bouton d'égalité sans entrer 2 variables. */
	if (cpt < 2) // on utilise pas (nbX == 0) vérifier parce que 0 peut être une valeur entrée par l'utilisateur.
	{
		alert("Il faut deux nombres pour pouvoir faire un calcul.");
	}
	else
	{
		if (op == "somme")
		{
			form.texte.value = parseInt(nb1) + parseInt(nb2);
		}
		else if (op == "soustraction")
		{
			form.texte.value = parseInt(nb1) - parseInt(nb2);
		}
		else if (op == "multiplication")
		{
			form.texte.value = nb1 * nb2;
		}
		else if (op == "division")
		{
			if (nb2 == 0)
			{
				alert("On ne peut pas diviser par z\351ro.");
			}
			else
			{
				form.texte.value = nb1 / nb2;
			}
		}
	}
}