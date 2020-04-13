import Tabletop from 'tabletop';

class SpreadsheetHelper  {

    constructor() {
        this.events = {};
    }

    getCategoryIcon(categoryName) {
        switch(categoryName) {
            case 'Artigos para Bébé / Criança': 
            return "baby-bottle";
            case 'Artigos para festas / Eventos': 
            return "party-popper";
            case 'Farmácia / Ervanaria': 
                return "pharmacy";
            case 'Florista': 
                return "flower";
            case 'Frutas e Legumes': 
                return "food-apple";
            case 'Lavandaria / Engomadoria': 
                return "hanger";
            case 'Padarias / Pastelarias / Doçarias': 
                return "baguette";
            case 'Produtos de Higiene / Beleza': 
                return "lipstick";
            case 'Produtos para animais': 
                return "paw";
            case 'Restaurante': 
                return "silverware-fork-knife";
            case 'Restaurante com Take Away': 
                return "shopping";
            case 'Supermercado / Mercearia': 
                return "cart";
            case 'Talhos / Peixarias': 
                return "knife";
            case 'Vestuário / Calçado': 
                return "dresser";
            default: 
                return "";
        }
    }

    loadData() {
        return new Promise((resolve, reject) => {
            Tabletop.init( {
                key: 'https://docs.google.com/spreadsheets/d/1hXJqJDKPOogwcmxF1qKhMTdUQsTWAB0TFlzPKjW6ZCc/edit?usp=sharing',
                simpleSheet: false,
            }
            ).then((data) => { 
                if (data) {
                    if (data["Fornecedores"] && data["Fornecedores"].elements) {
                        let categories = {};
                        var suppId = 0;
                        var catId = 0;
                        data["Fornecedores"].elements.forEach((v) => {
                            if (!categories[v["Categoria"]]) {
                                categories[v["Categoria"]] = {
                                    id: catId++,
                                    name: v["Categoria"],
                                    icon: this.getCategoryIcon(v["Categoria"]),
                                    suppliers: [],
                                };
                            }
                            categories[v["Categoria"]].suppliers.push({
                                    id: suppId++,
                                    name: v["Nomemagia d"],
                                    contact: v["Contacto"],
                                    website: v["Site / Facebook"],
                                    location: v["Localidade"],
                                    deliveryNotes: v["Taxa de entrega"],
                                    additionalNotes: v["Notas"],
                            });
                            resolve(categories);
                        });
                    }
                }
            }).catch((e) => reject(e));
        });
    }
}

//Singleton helper
const instance = new SpreadsheetHelper();
Object.freeze(instance);
export default instance;
