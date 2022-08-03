// Utilizar para salvar funções e códigos reutilizados em mais partes da aplicação. (helpers ou utils)
// utilizar código limpo.
// cada função em um arquivo próprio


//ex
export function moneyValueConverter(value: number){
	return value.toFixed(2).replace('.', ',');
}
