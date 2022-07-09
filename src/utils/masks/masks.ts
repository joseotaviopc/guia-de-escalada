export const onlyLetters = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/[^A-zÁ-ú " "]/, '');
	return pattern;
};

export const emailPaipe = (value: string) => {
	let pattern = value;
	if (!/(@\w)/.test(pattern)) {
		pattern = pattern.replace(/(\S+@)/, '$1paipe.co');

		return pattern;
	}
	if (/(@paipe$)/.test(pattern)) {
		pattern = pattern.replace(/@paipe/, '');
	}

	pattern = pattern.replace(/(\.\w+)\w+?$/, '$1');
	return pattern;
};

export const email = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/[^A-zÁ-ú@.0-9]/, '');
	return pattern;
};

export const onlyNumbers = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/\D/g, '');
	return pattern;
};

export const lettersNumbers = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/[^0-9Á-úA-z " "]/, '');
	return pattern;
};

export const CPF = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/\D/g, '');
	pattern = pattern.replace(/(\d{3})(\d)/, '$1.$2');
	pattern = pattern.replace(/(\d{3})(\d)/, '$1.$2');
	pattern = pattern.replace(/(\d{3})(\d)/, '$1-$2');
	pattern = pattern.replace(/(-\d{2})\d+?$/, '$1');
	return pattern;
};

export const CNPJ = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/\D/g, '');
	pattern = pattern.replace(/(\d{2})(\d)/, '$1.$2');
	pattern = pattern.replace(/(\d{3})(\d)/, '$1.$2');
	pattern = pattern.replace(/(\d{3})(\d)/, '$1/$2');
	pattern = pattern.replace(/(\d{4})(\d)/, '$1-$2');
	pattern = pattern.replace(/(-\d{2})\d+?$/, '$1');

	return pattern;
};

export const RG = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/\D/g, '');
	pattern = pattern.replace(/(\d{2})(\d)/, '$1.$2');
	pattern = pattern.replace(/(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
	pattern = pattern.replace(/(\d{2})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
	pattern = pattern.replace(/(-\d{1})\d+?$/, '$1');
	return pattern;
};

export const PIS = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/\D/g, '');
	pattern = pattern.replace(/(\d{2})(\d)/, '$1.$2');
	pattern = pattern.replace(/(\d{2})\.(\d{5})(\d)/, '$1.$2.$3');
	pattern = pattern.replace(/(\d{2})\.(\d{5})\.(\d{2})(\d{1})/, '$1.$2.$3-$4');
	pattern = pattern.replace(/(-\d{1})\d+?$/, '$1');
	return pattern;
};

export const CEP = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/\D/g, '');
	pattern = pattern.replace(/(\d{5})(\d)/, '$1-$2');
	pattern = pattern.replace(/(-\d{3})\d+?$/, '$1');
	return pattern;
};

export const dateMask = (value: string) => {
	let pattern = value;
	pattern = pattern.replace(/\D/g, '');
	pattern = pattern.replace(/(\d{2})(\d)/, '$1/$2');
	pattern = pattern.replace(/(\d{2})(\d)/, '$1/$2');
	pattern = pattern.replace(/(\d{4})\d+?$/, '$1');
	return pattern;
};

export const Telefone = (value: string) => {
	let pattern = value;

	pattern = pattern.replace(/\D/g, '');
	pattern = pattern.replace(/(\d{2})(\d)/, '$1+$2');
	pattern = pattern.replace(/(\d{2})(\d)/, '($1) $2');
	pattern = pattern.replace(/(\d{5})(\d)/, '$1 $2');

	return pattern;
};
