import { HeaderContainer, Logo, Links } from './headerStyles';
import { ArrowRight } from 'phosphor-react';

export function Header(){
	return(
		<HeaderContainer>
			<Logo>TGL</Logo>
			<Links>
				<a href="">Home</a>
				<div>
					<a href="">Account</a>
					<a href="">Log out <ArrowRight size={20} /></a>
				</div>
			</Links>
		</HeaderContainer>
	);
}
