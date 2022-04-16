import { MarketplaceListStyle, RRPText } from './style';

type props = {
    market: string,
    presence: number,
    sp: {
        value: number,
        rrp: number,
    },
    ip: {
        value: number,
        rrp: number,
    },
    view: string
}

const MarketplaceList = (list: props) => {
    return(
        <MarketplaceListStyle>
            <div>
                <p>Marketplace</p>
                <p>Presence</p>
                <p>SP (R$)</p>
                <p>%RRP</p>
                <p>IP (R$)</p>
                <p>%RRP</p>
                <p>View</p>
            </div>
            <div>
                <p>{list.market}</p>
                <p>{list.presence}%</p>
                <p>{list.sp.value}</p>
                <RRPText theme={{opacity: (list.sp.rrp / 100)}}>{list.sp.rrp}%</RRPText>
                <p>{list.ip.value}</p>
                <RRPText theme={{opacity: (list.ip.rrp / 100)}}>{list.ip.rrp}%</RRPText>
                <p>a</p>
            </div>
        </MarketplaceListStyle>
    )
}

export default MarketplaceList;