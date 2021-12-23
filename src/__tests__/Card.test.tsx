import { render } from '@testing-library/react';
import Card from '../components/Card';


it('displays Card component', async () => {
    const nameProp = 'John Doe';
    const imgProp = 'https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg';

    const card = render(
        <Card
            name={nameProp}
            image={imgProp}
        />
    );

    const nameLabel = await card.findByTestId('card-name');
    expect(nameLabel).toHaveTextContent(nameProp);

    const image = await card.findByTestId('card-img') as HTMLImageElement;
    expect(image.src).toMatch(imgProp);
});