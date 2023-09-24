import React, { useState } from 'react';
import Line from '../Line';
import styles from './styles.module.css';

const NavBar = ({ data  , setCategories , categories}) => {
  const [openItemId, setOpenItemId] = useState(null);

  const NAV_CONTENT = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about', child: ['Company', 'Career'] },
    {
      name: 'Our Products',
      id: 'product',
      child: data
    },
    { name: 'Contact Us', id: 'contact', child: ['+91 1234567890', 'Shopkart@gmail.com'] }
  ];

  const handleProductsClick = (itemId) => {
    setOpenItemId(prevItemId => (prevItemId === itemId ? null : itemId));
  };

  const handleCatogeries = (childItem) => {
    setCategories(childItem);
  }

  return (
    <nav>
      <div className={styles.nav_box}>
        {NAV_CONTENT.map(item => (
          <div key={item.id} style={{ position: 'relative' }}>
            <span className={styles.item_name} onClick={() => handleProductsClick(item.id)}>
              {item?.name}
            </span>
            {item?.child && openItemId === item.id && (
              <div className={styles.child_item_container}>
                <Line width='120px' />
                {item?.child.map((childItem, ind) => (
                  <span 
                  className={styles.child_item}
                  style={{backgroundColor : categories===childItem? 'white': '', color : categories===childItem? 'black': '',}} 
                  onClick={()=>handleCatogeries(childItem)} key={ind}>{childItem}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

