import { render } from '@testing-library/react';
import CharacterDetails from '../components/CharacterDetails';

const character = {
    id: 3,
    name: 'Summer Smith'
};
const routeComponentPropsMock = {
    match: {
        params: {
            id: character.id
        }
    } as any,
    location: {} as any,
    history: {} as any
};

it('displays correct character depending on params', async () => {
    const component = render(
        <CharacterDetails {...routeComponentPropsMock} />
    );

    const nameLabel = await component.findByTestId('character-name');
    expect(nameLabel).toHaveTextContent(character.name);
});

it('displays necessary character\'s data', async () => {
    const component = render(
        <CharacterDetails {...routeComponentPropsMock} />
    );

    expect(await component.findByTestId('character-name')).toBeInTheDocument();
    expect(await component.findByTestId('character-status')).toBeInTheDocument();
    expect(await component.findByTestId('character-species')).toBeInTheDocument();
    expect(await component.findByTestId('character-gender')).toBeInTheDocument();
    expect(await component.findByTestId('character-origin')).toBeInTheDocument();
    expect(await component.findByTestId('character-location')).toBeInTheDocument();
    expect(await component.findByTestId('character-episodes')).toBeInTheDocument();
});